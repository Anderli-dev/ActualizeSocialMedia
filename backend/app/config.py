from pydantic import BaseSettings
from dotenv import find_dotenv


class Settings(BaseSettings):
    DATABASE_URL: str
    SECRET_KEY: str
    CLIENT_ORIGIN: str

    class Config:
        env_file = find_dotenv(".env")
        env_file_encoding = 'utf-8'


settings = Settings()
