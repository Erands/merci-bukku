from app.db.database import SessionLocal
from app.models.product import Product

db = SessionLocal()

products = [
    {
        "category_id": 1,
        "name": "Ramette Papier Double A A4 80g",
        "slug": "double-a-a4-80g",
        "description": "Ramette de papier A4 premium.",
        "sku": "MB-001",
        "price": 4500,
        "quantity": 500,
        "image": "/products/double-a.jpg",
    },
    {
        "category_id": 1,
        "name": "Stylo BIC Bleu",
        "slug": "stylo-bic-bleu",
        "description": "Stylo bille BIC.",
        "sku": "MB-002",
        "price": 350,
        "quantity": 5000,
        "image": "/products/bic.jpg",
    },
    {
        "category_id": 2,
        "name": "Sac à dos scolaire",
        "slug": "sac-a-dos",
        "description": "Sac scolaire robuste.",
        "sku": "MB-003",
        "price": 12000,
        "quantity": 250,
        "image": "/products/bag.jpg",
    },
    {
        "category_id": 4,
        "name": "Serviettes Hôtel",
        "slug": "serviettes-hotel",
        "description": "Serviettes premium.",
        "sku": "MB-004",
        "price": 8500,
        "quantity": 300,
        "image": "/products/towel.jpg",
    },
    {
        "category_id": 8,
        "name": "HP LaserJet Pro",
        "slug": "hp-laserjet-pro",
        "description": "Imprimante professionnelle.",
        "sku": "MB-005",
        "price": 185000,
        "quantity": 25,
        "image": "/products/hp.jpg",
    },
]

for p in products:
    exists = db.query(Product).filter(Product.slug == p["slug"]).first()
    if not exists:
        db.add(Product(**p))

db.commit()
db.close()

print("✓ Products seeded.")
