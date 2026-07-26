from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.crud import order as crud
from app.schemas.order import OrderCreate

router = APIRouter(
    prefix="/orders",
    tags=["Orders"],
)

@router.get("/{user_id}")
def get_orders(
    user_id: int,
    db: Session = Depends(get_db),
):
    return crud.get_user_orders(db, user_id)

@router.post("/")
def create_order(
    order: OrderCreate,
    db: Session = Depends(get_db),
):
    return crud.create(db, order)
