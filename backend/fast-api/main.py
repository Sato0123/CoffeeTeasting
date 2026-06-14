from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Roster(BaseModel):
    company_name: str
    company_name2: str


@app.post("/")
async def create_roster(request: Request):
    body = await request.json()
    print(body)
    # TODO: DB接続をする
    return body
