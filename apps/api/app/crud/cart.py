from sqlalchemy.orm import Session

from app.models.cart import Cart
from app.schemas.cart import CartCreate


def get_user_cart(db: Session, user_id: int):
    return db.query(Cart).filter(Cart.user_id == user_id).all()


def create(db: Session, cart: CartCreate):
    obj = Cart(**cart.model_dump())
    db.add(obj)
    db.commit()
    db.refresh(obj)
    return obj


def delete(db: Session, cart_id: int):
    obj = db.query(Cart).filter(Cart.id == cart_id).first()
    if obj:
        db.delete(obj)
        db.commit()
    return {"success": True}
