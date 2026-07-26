from fastapi import FastAPI

app = FastAPI(
    title="Merci Bokku API",
    version="1.0.0"
)

@app.get("/")
def root():
    return {
        "message": "Merci Bokku API is running"
    }
