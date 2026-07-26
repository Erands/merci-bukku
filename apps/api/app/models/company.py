from sqlalchemy import Column, Integer, String, Text

from app.db.database import Base


class Company(Base):
    __tablename__ = "companies"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String(255), nullable=False)

    slug = Column(String(255), unique=True, nullable=False)

    description = Column(Text)

    logo = Column(String(500))

    cover = Column(String(500))

    phone = Column(String(50))

    email = Column(String(255))

    address = Column(Text)

    city = Column(String(150))

    country = Column(String(150), default="Côte d'Ivoire")

    verified = Column(Integer, default=0)

    active = Column(Integer, default=1)
