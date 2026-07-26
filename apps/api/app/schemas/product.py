from pydantic import BaseModel
from typing import Optional

class ProductBase(BaseModel):
    category_id: int
    name: str
    slug: str
    description: Optional[str] = None
    sku: Optional[str] = None
    price: float
    quantity: int
    image: Optional[str] = None

class ProductCreate(ProductBase):
    pass

class Product(ProductBase):
    id: int

    class Config:
        from_attributes = True
