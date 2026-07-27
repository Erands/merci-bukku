from app.db.database import SessionLocal
from app.models.user import User

db = SessionLocal()

user = db.query(User).filter(User.id == 1).first()

if not user:
    db.add(
        User(
            id=1,
            first_name="Demo",
            last_name="User",
            email="demo@mercibokku.com",
            password="demo",
            is_active=True,
        )
    )
    db.commit()

print("✓ Demo user seeded.")

db.close()
