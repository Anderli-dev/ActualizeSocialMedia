from typing import Type, Any

from fastapi import FastAPI, APIRouter
from starlette.middleware.cors import CORSMiddleware

from config import settings


class ViewRouter(FastAPI):
    def __init__(self, api_router: APIRouter, **extra: Any,):
        super().__init__(**extra)
        self.router = api_router

    def add_view(self, cls: Type[object], path: str = "/") -> None:
        obj = cls()
        for method in dir(obj):
            if method in ["get", "head", "post", ...]:
                self.router.add_api_route(
                    path,
                    getattr(obj, method),
                    methods=[method],
                )


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
