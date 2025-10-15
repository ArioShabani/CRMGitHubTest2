from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.services.ai import ai_echo


router = APIRouter()


@router.get("/ping")
def api_ping():
    return {"status": "ok"}


@router.get("/ai/echo")
def ai_echo_endpoint(prompt: str, db: Session = Depends(get_db)):
    # db injected for future use
    return {"echo": ai_echo(prompt)}



