from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    APP_NAME: str = "Merci Bokku API"
    APP_VERSION: str = "1.0.0"

    POSTGRES_HOST: str = "localhost"
    POSTGRES_PORT: int = 5432
    POSTGRES_DB: str = "mercibokku"
    POSTGRES_USER: str = "mercibokku"
    POSTGRES_PASSWORD: str = ""

    REDIS_HOST: str = "localhost"
    REDIS_PORT: int = 6379

    class Config:
        env_file = ".env"

settings = Settings()
