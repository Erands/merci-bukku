from app.db.database import SessionLocal
from app.models.category import Category

db = SessionLocal()

categories = [
    {
        "name": "Fournitures de Bureau",
        "slug": "fournitures-bureau",
        "description": "Papeterie et équipements de bureau",
        "icon": "Briefcase",
    },
    {
        "name": "Fournitures Scolaires",
        "slug": "fournitures-scolaires",
        "description": "Écoles et universités",
        "icon": "GraduationCap",
    },
    {
        "name": "Restaurants",
        "slug": "restaurants",
        "description": "Équipements et consommables",
        "icon": "Utensils",
    },
    {
        "name": "Hôtels",
        "slug": "hotels",
        "description": "Produits hôteliers",
        "icon": "Hotel",
    },
    {
        "name": "Santé",
        "slug": "sante",
        "description": "Cliniques et pharmacies",
        "icon": "HeartPulse",
    },
    {
        "name": "Construction",
        "slug": "construction",
        "description": "Matériaux et équipements",
        "icon": "Hammer",
    },
    {
        "name": "Agriculture",
        "slug": "agriculture",
        "description": "Intrants et matériels agricoles",
        "icon": "Tractor",
    },
    {
        "name": "Électronique",
        "slug": "electronique",
        "description": "Informatique et électronique",
        "icon": "Laptop",
    },
    {
        "name": "Mobilier",
        "slug": "mobilier",
        "description": "Mobilier professionnel",
        "icon": "Sofa",
    },
    {
        "name": "Beauté",
        "slug": "beaute",
        "description": "Cosmétiques et bien-être",
        "icon": "Sparkles",
    },
]

for c in categories:
    exists = db.query(Category).filter(Category.slug == c["slug"]).first()
    if not exists:
        db.add(Category(**c))

db.commit()
db.close()

print("✓ Categories seeded successfully.")
