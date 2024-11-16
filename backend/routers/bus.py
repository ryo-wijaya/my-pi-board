from fastapi import APIRouter

router = APIRouter()


@router.get("/bus/", tags=["bus"])
async def get_buses():
    return [{"bus1": "173"}, {"bus2": "97"}]
