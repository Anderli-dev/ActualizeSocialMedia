from fastapi import FastAPI, APIRouter
from starlette.middleware.cors import CORSMiddleware

from config import settings
import models

app = FastAPI()
router = APIRouter()


origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

import views # noqa

app.include_router(router)
