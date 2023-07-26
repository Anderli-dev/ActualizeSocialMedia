from pydantic import BaseModel, EmailStr
from typing import Optional


class UserBaseSchema(BaseModel):
    username: str
    email: EmailStr


class UserCreateSchema(UserBaseSchema):
    password: str


class UserUpdateSchema(UserCreateSchema):
    id: int


class UserSchema(UserBaseSchema):
    id: Optional[int] = None

    class Config:
        orm_mode = True


class UserInDBSchema(UserSchema):
    hashed_password: str
