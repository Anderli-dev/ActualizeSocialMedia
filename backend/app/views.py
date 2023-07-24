from fastapi_class import View

from main import router


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
