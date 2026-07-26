from fastapi import FastAPI
from app.api.routes import router

app = FastAPI(
    title="Merci Bokku API",
    version="1.0.0"
)

app.include_router(router, prefix="/api")

@app.get("/")
def root():
    return {
        "message": "Merci Bokku API is running"
    }
