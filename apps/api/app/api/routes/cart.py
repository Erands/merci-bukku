from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.crud import cart as crud
from app.schemas.cart import CartCreate

router = APIRouter(
    prefix="/cart",
    tags=["Cart"],
)


@router.get("/{user_id}")
def get_cart(user_id: int, db: Session = Depends(get_db)):
    return crud.get_user_cart(db, user_id)


@router.post("/")
def add_to_cart(
    cart: CartCreate,
    db: Session = Depends(get_db),
):
    return crud.create(db, cart)


@router.delete("/{cart_id}")
def delete_cart(cart_id: int, db: Session = Depends(get_db)):
    return crud.delete(db, cart_id)
