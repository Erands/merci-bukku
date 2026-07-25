from fastapi import FastAPI

app = FastAPI(
    title="Merci Bokku API",
    version="1.0.0"
)

@app.get("/")
async def root():
    return {
        "message": "Welcome to Merci Bokku API",
        "status": "online"
    }

@app.get("/health")
async def health():
    return {
        "status": "healthy"
    }
