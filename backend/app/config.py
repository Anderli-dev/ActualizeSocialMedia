from pydantic import BaseSettings
from dotenv import find_dotenv


class Settings(BaseSettings):
    DATABASE_URL: str
    CLIENT_ORIGIN: str

    JWT_SECRET_KEY: str
    JWT_REFRESH_SECRET_KEY: str
    ALGORITHM: str

    class Config:
        env_file = find_dotenv(".env")
        env_file_encoding = 'utf-8'


settings = Settings()
