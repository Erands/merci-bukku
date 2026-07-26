from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.crud import product_image as crud
from app.schemas.product_image import ProductImageCreate

router = APIRouter(
    prefix="/product-images",
    tags=["Product Images"],
)


@router.get("/{product_id}")
def get_images(product_id: int, db: Session = Depends(get_db)):
    return crud.get_by_product(db, product_id)


@router.post("/")
def create_image(
    image: ProductImageCreate,
    db: Session = Depends(get_db),
):
    return crud.create(db, image)
