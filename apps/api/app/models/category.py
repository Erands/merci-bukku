from sqlalchemy import Column, Integer, String, Text

from app.db.database import Base


class Category(Base):
    __tablename__ = "categories"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String(200), nullable=False)

    slug = Column(String(200), unique=True, nullable=False)

    description = Column(Text)

    image = Column(String(500))

    icon = Column(String(100))

    is_active = Column(Integer, default=1)

    sort_order = Column(Integer, default=0)
