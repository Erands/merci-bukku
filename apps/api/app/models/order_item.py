from sqlalchemy import Column, ForeignKey, Integer, Float
from sqlalchemy.orm import relationship

from app.db.database import Base


class OrderItem(Base):
    __tablename__ = "order_items"

    id = Column(Integer, primary_key=True, index=True)

    order_id = Column(
        Integer,
        ForeignKey("orders.id", ondelete="CASCADE"),
        nullable=False,
    )

    product_id = Column(
        Integer,
        ForeignKey("products.id", ondelete="CASCADE"),
        nullable=False,
    )

    quantity = Column(Integer, default=1)

    unit_price = Column(Float, default=0)

    total = Column(Float, default=0)

    order = relationship("Order")
    product = relationship("Product")
