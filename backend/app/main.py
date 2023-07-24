from fastapi import FastAPI, APIRouter
from starlette.middleware.cors import CORSMiddleware

from config import settings


class ViewRouter(FastAPI):
    def __init__(self, api_router: APIRouter, **extra: Any,):
        super().__init__(**extra)
        self.router = api_router

app = FastAPI()
router = APIRouter()
app = ViewRouter(router)


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
