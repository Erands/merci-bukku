from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import router
from app.db.database import create_tables

app = FastAPI(title="Merci Bokku API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def startup():
    create_tables()

app.include_router(router, prefix="/api")

@app.get("/")
def root():
    return {"message": "Merci Bokku API is running"}
