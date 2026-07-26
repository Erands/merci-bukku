from app.db.database import SessionLocal
from app.models.cart import Cart

db = SessionLocal()

items = [
    {
        "user_id": 1,
        "product_id": 1,
        "quantity": 2,
    },
    {
        "user_id": 1,
        "product_id": 2,
        "quantity": 5,
    },
]

for item in items:
    exists = (
        db.query(Cart)
        .filter(
            Cart.user_id == item["user_id"],
            Cart.product_id == item["product_id"],
        )
        .first()
    )

    if not exists:
        db.add(Cart(**item))

db.commit()
db.close()

print("✓ Cart seeded.")
