from pydantic import BaseModel


class OrderBase(BaseModel):
    user_id: int
    total: float = 0


class OrderCreate(OrderBase):
    pass


class Order(OrderBase):
    id: int
    status: str
    payment_status: str

    class Config:
        from_attributes = True
