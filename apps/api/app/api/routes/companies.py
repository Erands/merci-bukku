from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.crud import company as crud
from app.schemas.company import CompanyCreate

router = APIRouter(
    prefix="/companies",
    tags=["Companies"],
)


@router.get("/")
def get_companies(db: Session = Depends(get_db)):
    return crud.get_all(db)


@router.post("/")
def create_company(
    company: CompanyCreate,
    db: Session = Depends(get_db),
):
    return crud.create(db, company)
