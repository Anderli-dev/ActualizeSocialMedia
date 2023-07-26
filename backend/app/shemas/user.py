from pydantic import BaseModel, EmailStr, constr
from typing import Optional
import uuid


class UserBaseSchema(BaseModel):
    username: str
    email: EmailStr


class UserCreateSchema(UserBaseSchema):
    password: constr(min_length=8)


class UserUpdateSchema(UserCreateSchema):
    id: uuid.UUID


class UserSchema(UserBaseSchema):
    id: Optional[int] = None

    class Config:
        orm_mode = True


class UserInDBSchema(UserSchema):
    hashed_password: str
