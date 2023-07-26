from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from fastapi_class import View
from pydantic import EmailStr

import utils
from database import get_db, SessionLocal
from main import router
from models import UserModel
from shemas import UserCreateSchema, UserInDBSchema


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
