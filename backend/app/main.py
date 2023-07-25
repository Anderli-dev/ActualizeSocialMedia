from fastapi import FastAPI, APIRouter
from starlette.middleware.cors import CORSMiddleware

from config import settings

app = FastAPI()
router = APIRouter()


origins = [
    settings.CLIENT_ORIGIN,
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

import views

app.include_router(router)
