from app.db.database import SessionLocal
from app.models.product_image import ProductImage

db = SessionLocal()

images = [
    {
        "product_id": 1,
        "image": "/products/double-a.jpg",
        "alt": "Ramette Papier Double A A4",
        "sort_order": 1,
    },
    {
        "product_id": 2,
        "image": "/products/bic.jpg",
        "alt": "Stylo BIC Bleu",
        "sort_order": 1,
    },
    {
        "product_id": 3,
        "image": "/products/bag.jpg",
        "alt": "Sac à dos scolaire",
        "sort_order": 1,
    },
    {
        "product_id": 4,
        "image": "/products/towel.jpg",
        "alt": "Serviettes Hôtel",
        "sort_order": 1,
    },
    {
        "product_id": 5,
        "image": "/products/hp.jpg",
        "alt": "HP LaserJet Pro",
        "sort_order": 1,
    },
]

for item in images:
    exists = (
        db.query(ProductImage)
        .filter(
            ProductImage.product_id == item["product_id"],
            ProductImage.image == item["image"],
        )
        .first()
    )

    if not exists:
        db.add(ProductImage(**item))

db.commit()
db.close()

print("✓ Product images seeded.")
