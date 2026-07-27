from sqlalchemy.orm import Session

from app.models.order_item import OrderItem
from app.schemas.order_item import OrderItemCreate


def get_by_order(db: Session, order_id: int):
    return (
        db.query(OrderItem)
        .filter(OrderItem.order_id == order_id)
        .all()
    )


def create(db: Session, item: OrderItemCreate):
    obj = OrderItem(**item.model_dump())
    db.add(obj)
    db.commit()
    db.refresh(obj)
    return obj
