from app.db.database import SessionLocal
from app.models.order import Order

db = SessionLocal()

order = db.query(Order).filter(Order.id == 1).first()

if not order:
    db.add(
        Order(
            id=1,
            user_id=1,
            total=10750,
            status="pending",
            payment_status="unpaid",
        )
    )
    db.commit()

print("✓ Order seeded.")
db.close()
