from fastapi import APIRouter

from .health import router as health_router
from .categories import router as categories_router
from .products import router as products_router

router = APIRouter()

router.include_router(health_router)
router.include_router(categories_router)
router.include_router(products_router)
