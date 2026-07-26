from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.crud import product as crud
from app.schemas.product import ProductCreate

router = APIRouter(
    prefix="/products",
    tags=["Products"],
)


@router.get("/")
def get_products(db: Session = Depends(get_db)):
    return crud.get_all(db)


@router.post("/")
def create_product(
    product: ProductCreate,
    db: Session = Depends(get_db),
):
    return crud.create(db, product)
