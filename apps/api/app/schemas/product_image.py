from typing import Optional
from pydantic import BaseModel


class ProductImageBase(BaseModel):
    product_id: int
    image: str
    alt: Optional[str] = None
    sort_order: int = 0


class ProductImageCreate(ProductImageBase):
    pass


class ProductImage(ProductImageBase):
    id: int

    class Config:
        from_attributes = True
