from app.db.database import SessionLocal
from app.models.order_item import OrderItem

db = SessionLocal()

items = [
    {
        "order_id": 1,
        "product_id": 1,
        "quantity": 2,
        "unit_price": 4500,
        "total": 9000,
    },
    {
        "order_id": 1,
        "product_id": 2,
        "quantity": 5,
        "unit_price": 350,
        "total": 1750,
    },
]

for item in items:
    exists = (
        db.query(OrderItem)
        .filter(
            OrderItem.order_id == item["order_id"],
            OrderItem.product_id == item["product_id"],
        )
        .first()
    )

    if not exists:
        db.add(OrderItem(**item))

db.commit()
db.close()

print("✓ Order items seeded.")
