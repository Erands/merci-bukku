from sqlalchemy.orm import Session

from app.models.order import Order
from app.schemas.order import OrderCreate


def get_user_orders(db: Session, user_id: int):
    return (
        db.query(Order)
        .filter(Order.user_id == user_id)
        .order_by(Order.id.desc())
        .all()
    )


def create(db: Session, order: OrderCreate):
    obj = Order(**order.model_dump())
    db.add(obj)
    db.commit()
    db.refresh(obj)
    return obj
