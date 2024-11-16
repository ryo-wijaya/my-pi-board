from fastapi import APIRouter

router = APIRouter()


@router.get("/stock/", tags=["stock"])
async def get_stocks():
    return [{"stock1": "APPL"}, {"stock2": "ASML"}]
