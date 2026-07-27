from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.crud import order_item as crud
from app.schemas.order_item import OrderItemCreate

router = APIRouter(
    prefix="/order-items",
    tags=["Order Items"],
)


@router.get("/{order_id}")
def get_order_items(
    order_id: int,
    db: Session = Depends(get_db),
):
    return crud.get_by_order(db, order_id)


@router.post("/")
def create_order_item(
    item: OrderItemCreate,
    db: Session = Depends(get_db),
):
    return crud.create(db, item)
