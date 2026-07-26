from fastapi import FastAPI

from app.api.routes import router
from app.db.database import create_tables

app = FastAPI(
    title="Merci Bokku API",
    version="1.0.0"
)

@app.on_event("startup")
def startup():
    create_tables()

app.include_router(router, prefix="/api")

@app.get("/")
def root():
    return {"message": "Merci Bokku API is running"}
