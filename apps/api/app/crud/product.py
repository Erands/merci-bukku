from sqlalchemy.orm import Session

from app.models.product import Product
from app.schemas.product import ProductCreate


def get_all(db: Session):
    return (
        db.query(Product)
        .filter(Product.status == "active")
        .all()
    )


def create(db: Session, product: ProductCreate):
    obj = Product(**product.model_dump())
    db.add(obj)
    db.commit()
    db.refresh(obj)
    return obj
