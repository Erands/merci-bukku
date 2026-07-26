from sqlalchemy.orm import Session

from app.models.category import Category
from app.schemas.category import CategoryCreate


def get_all(db: Session):
    return (
        db.query(Category)
        .filter(Category.is_active == 1)
        .order_by(Category.sort_order)
        .all()
    )


def create(db: Session, category: CategoryCreate):
    obj = Category(**category.model_dump())
    db.add(obj)
    db.commit()
    db.refresh(obj)
    return obj
