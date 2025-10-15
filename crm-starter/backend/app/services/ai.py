from app.core.config import get_settings


def ai_echo(prompt: str) -> str:
    settings = get_settings()
    # Placeholder for an AI call; keeps deterministic for now
    return f"AI says: {prompt}" if prompt else ""



