from sqlalchemy import (
    Column,
    Integer,
    String,
    Text,
    Float,
    ForeignKey,
)

from sqlalchemy.orm import relationship

from app.db.database import Base


class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)

    category_id = Column(
        Integer,
        ForeignKey("categories.id"),
        nullable=False,
    )

    name = Column(String(255), nullable=False)

    slug = Column(String(255), unique=True, nullable=False)

    description = Column(Text)

    sku = Column(String(100))

    price = Column(Float, default=0)

    quantity = Column(Integer, default=0)

    image = Column(String(500))

    status = Column(String(50), default="active")

    category = relationship("Category")
