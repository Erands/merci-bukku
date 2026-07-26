from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.crud import category as crud
from app.schemas.category import CategoryCreate

router = APIRouter(
    prefix="/categories",
    tags=["Categories"],
)


@router.get("/")
def get_categories(db: Session = Depends(get_db)):
    return crud.get_all(db)


@router.post("/")
def create_category(
    category: CategoryCreate,
    db: Session = Depends(get_db),
):
    return crud.create(db, category)
