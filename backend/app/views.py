class IndexView:
    async def get(self):
        return "Hello, Get"

    async def post(self):
        return "Hello, Post"


class SayHelloView:
    async def get(self, name: str):
        return {"message": f"Hello {name}"}
