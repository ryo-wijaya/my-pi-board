from typing import Union

from fastapi import FastAPI
from fastapi import APIRouter

from routers import bus, stock

app = FastAPI(root_path="/api")

app.include_router(stock.router)
app.include_router(bus.router)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
