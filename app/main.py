import hashlib
from fastapi import FastAPI, Request, Form, Response
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi.templating import Jinja2Templates
from datetime import datetime
from passlib.context import CryptContext
from pydantic import BaseModel
import requests
from pathlib import Path
from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String, ForeignKey, Boolean, select, DATETIME
from sqlalchemy.orm import Session
from typing import Union
from . import models, schemas
from .database import SessionLocal
from .schemas import UserInDB

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_DIR = Path(__file__).resolve().parent
templates = Jinja2Templates(directory=str(Path(BASE_DIR, 'templates')))

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_user(db, username: str):
    if username in db:
        user_dict = db[username]
        return UserInDB(**user_dict)

def authenticate_user(fake_db, username: str, password: str):
    user = get_user(fake_db, username)
    if not user or not verify_password(password, user.hashed_password):
        return False
    return user


def save_request_history(db: Session, nickname: str):
    db_history = models.History(nickname=nickname, request_date=datetime.now())
    db.add(db_history)
    db.commit()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

class NicknameForm(BaseModel):
    nickname: str


@app.post("/")
async def submit_nickname(nickname_form: NicknameForm, db:Session=Depends(get_db)):
    nickname = nickname_form.nickname
    result = get_data(nickname, db)
    return result

def get_data(nickname, db):
    key = "a1b084fb734c833b6394496ded650f97"
    selects = "list"
    search = "search"
    response = requests.get(f'https://api.tanki.su/wot/account/{selects}/?application_id={key}&{search}={nickname}')
    result = response.json()
    save_request_history(db, nickname)
    return result

def get_history_data(db:Session):
    return db.query(models.History).all()

@app.get("/")
async def read_form(request: Request):
    return templates.TemplateResponse("form.html", {"request": request})

@app.post("/")
async def read_form(request: Request, nickname: str = Form(...), db: Session = Depends(get_db)):
    result = get_data(nickname, db)
    return {"result": result}

@app.get("/history")
async def get_history(request: Request, db: Session = Depends(get_db)):
    history_records = get_history_data(db)
    return {"history_records": history_records}

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
def hash_password(password:str ):
    return hashlib.md5(password.encode()).hexdigest()
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(hash_password(plain_password), hashed_password)
def get_user(db, username: str):
    return db.query(models.User).filter(models.User.username == username).first()
def authenticate_user(db: Session, username: str, password: str):
    user = get_user(db, username)
    if not user or not verify_password(password, user.hashed_password):
        return False
    return user
def create_user(db: Session, username:str, password: str):
    db_user = models.User(username=username, hashed_password=hash_password(password), disabled=False)
    db.add(db_user)
    db.commit()
    return db_user
@app.post("/token")
def login(db:Session = Depends(get_db), form_data: OAuth2PasswordRequestForm = Depends()):
    user = authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    return {"access_token": user.username, "token_type": "bearer"}
@app.post("/users/", response_model=schemas.User)
def add_user(username: str = Form(...), password: str = Form(...), db: Session = Depends(get_db)):
    db_user = get_user(db, username)
    if db_user:
        raise HTTPException(status_code=400, detail="Username already registered")
    result = create_user(db=db, username=username, password=password)
    return result