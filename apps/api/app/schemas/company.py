from typing import Optional
from pydantic import BaseModel


class CompanyBase(BaseModel):
    name: str
    slug: str
    description: Optional[str] = None
    logo: Optional[str] = None
    cover: Optional[str] = None
    phone: Optional[str] = None
    email: Optional[str] = None
    address: Optional[str] = None
    city: Optional[str] = None
    country: Optional[str] = "Côte d'Ivoire"


class CompanyCreate(CompanyBase):
    pass


class Company(CompanyBase):
    id: int
    verified: int
    active: int

    class Config:
        from_attributes = True
