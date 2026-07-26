from app.db.database import SessionLocal
from app.models.company import Company

db = SessionLocal()

companies = [
    {
        "name": "Merci Bokku",
        "slug": "merci-bokku",
        "description": "Fournisseur officiel de fournitures de bureau, scolaires et équipements professionnels.",
        "city": "Abidjan",
        "verified": 1,
    },
    {
        "name": "BrandIT Africa",
        "slug": "brandit-africa",
        "description": "Agence digitale spécialisée en branding, marketing et développement logiciel.",
        "city": "Abidjan",
        "verified": 1,
    },
    {
        "name": "SAPHIR",
        "slug": "saphir",
        "description": "Solutions professionnelles pour entreprises et administrations.",
        "city": "Abidjan",
        "verified": 1,
    },
]

for c in companies:
    exists = db.query(Company).filter(Company.slug == c["slug"]).first()
    if not exists:
        db.add(Company(**c))

db.commit()
db.close()

print("✓ Companies seeded.")
