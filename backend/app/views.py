from fastapi import Depends, HTTPException, status, Response
from fastapi.security import OAuth2PasswordRequestForm
from fastapi_class import View
from pydantic import EmailStr

import utils
from database import get_db, SessionLocal
from main import router
from models import UserModel
from shemas import UserCreateSchema, UserInDBSchema, TokenSchema


@View(router)
class IndexView:
    async def get(self):
        return "Hello, Get"

    async def post(self):
        return "Hello, Post"


@View(router, path="/say-hello/{name}")
class SayHelloView:
    async def get(self, name: str):
        return {"message": f"Hello {name}"}


@View(router, path="/register")
class RegisterView:
    RESPONSE_MODEL = {
        "post": UserInDBSchema
    }

    async def post(self, payload: UserCreateSchema, db: SessionLocal = Depends(get_db)):
        user_query = db.query(UserModel).filter(
            UserModel.email == EmailStr(payload.email.lower()))
        user = user_query.first()

        if user:
            raise HTTPException(status_code=status.HTTP_409_CONFLICT,
                                detail='Account already exist')

        payload.password = utils.get_hashed_password(payload.password)

        user = UserModel(**payload.dict())
        db.add(user)
        db.commit()

        user = {x: payload.dict()[x] for x in payload.dict() if x not in {"password"}}
        user["hashed_password"] = payload.password

        return user


@View(router, path="/login")
class LoginView:
    RESPONSE_MODEL = {
        "post": TokenSchema
    }

    async def post(self,
                   response: Response,
                   form_data: OAuth2PasswordRequestForm = Depends(),
                   db: SessionLocal = Depends(get_db)):
        user_query = db.query(UserModel).filter(UserModel.email == EmailStr(form_data.username.lower()))
        user = user_query.first()

        if user is None:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Incorrect email or password"
            )

        hashed_pass = user.password
        if not utils.verify_password(form_data.password, hashed_pass):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Incorrect email or password"
            )

        access_token = utils.create_access_token(user.email)
        refresh_token = utils.create_refresh_token(user.email)

        response.set_cookie(key='access_token', value=access_token, max_age=60 * 60 * 24 * 7,
                            expires=60 * 60 * 24 * 7, path='/', domain='localhost:3000',
                            secure=False, httponly=True, samesite='lax')
        response.set_cookie('refresh_token', refresh_token,
                            60 * 60 * 24 * 7, 60 * 60 * 24 * 7, '/', 'localhost:3000', False, True, 'lax')
        response.set_cookie('logged_in', 'True', 60 * 60 * 24 * 7,
                            60 * 60 * 24 * 7, '/', 'localhost:3000', False, False, 'lax')

        return {
            "access_token": access_token,
        }
