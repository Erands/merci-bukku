from sqlalchemy.orm import Session

from app.models.company import Company
from app.schemas.company import CompanyCreate


def get_all(db: Session):
    return (
        db.query(Company)
        .filter(Company.active == 1)
        .order_by(Company.name)
        .all()
    )


def create(db: Session, company: CompanyCreate):
    obj = Company(**company.model_dump())
    db.add(obj)
    db.commit()
    db.refresh(obj)
    return obj
