from fastapi.testclient import TestClient

from app.main import app


client = TestClient(app)


def test_ping_root():
    resp = client.get("/ping")
    assert resp.status_code == 200
    assert resp.json()["status"] == "ok"


def test_ping_api():
    resp = client.get("/api/ping")
    assert resp.status_code == 200
    assert resp.json()["status"] == "ok"



