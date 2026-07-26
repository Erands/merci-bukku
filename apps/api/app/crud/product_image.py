from sqlalchemy.orm import Session

from app.models.product_image import ProductImage
from app.schemas.product_image import ProductImageCreate


def get_by_product(db: Session, product_id: int):
    return (
        db.query(ProductImage)
        .filter(ProductImage.product_id == product_id)
        .order_by(ProductImage.sort_order)
        .all()
    )


def create(db: Session, image: ProductImageCreate):
    obj = ProductImage(**image.model_dump())
    db.add(obj)
    db.commit()
    db.refresh(obj)
    return obj
