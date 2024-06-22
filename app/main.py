from fastapi import FastAPI, Request, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi.templating import Jinja2Templates
from datetime import datetime
from passlib.context import CryptContext
from pydantic import BaseModel
import requests
from pathlib import Path
from fastapi import FastAPI, HTTPException, Depends
from databases import Database
from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String, ForeignKey, Boolean, select, DATETIME

DATABASE_URL = "sqlite:///./test.db"
database = Database(DATABASE_URL)
metadata = MetaData()

users = Table(
    "users",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("username", String, unique=True),
    Column("hashed_password", String),
    Column("disabled", Boolean, default=False)
)

history = Table(
    "history",
    metadata,
    Column("request_id", Integer, primary_key=True),
    Column("nickmane", String),
    Column("request_date", DATETIME),
    Column("user_id", Integer, ForeignKey("users.id")),
)

engine = create_engine(DATABASE_URL)
metadata.create_all(engine)

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

# Модель для хранения данных запроса
class RequestHistory(BaseModel):
    id: int
    nickname: str
    request_date: datetime


class User(BaseModel):
    username: str
    disabled: bool = False

class UserInDB(User):
    hashed_password: str


# Контекст хеширования паролей
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# OAuth2 схема для получения токена
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# Функция для верификации пароля
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

# Функция для получения пользователя из базы данных
def get_user(db, username: str):
    if username in db:
        user_dict = db[username]
        return UserInDB(**user_dict)

# Функция для аутентификации пользователя
def authenticate_user(fake_db, username: str, password: str):
    user = get_user(fake_db, username)
    if not user or not verify_password(password, user.hashed_password):
        return False
    return user




# Функция для сохранения данных запроса в базе данных
def save_request_history(nickname: str):
    # Получаем текущую дату и время
    request_date = datetime.now()
    # Изменяем SQL-запрос для включения даты запроса
    c.execute("INSERT INTO history (nickname, request_date) VALUES (?, ?)", (nickname, request_date))
    conn.commit()

# Функция для получения данных
def get_data(nickname, request_date):
    key = "a1b084fb734c833b6394496ded650f97"
    selects = "list"
    search = "search"
    response = requests.get(f'https://api.tanki.su/wot/account/{selects}/?application_id={key}&{search}={nickname}')
    save_request_history(request_date)
    save_request_history(nickname)  # Сохранение истории запросов
    return response.json()

@app.get("/")
async def read_form(request: Request):
    return templates.TemplateResponse("form.html", {"request": request})

@app.post("/")
async def read_form(request: Request, nickname: str = Form(...), request_date: datetime = Form(...)):
    result = get_data(nickname, request_date)
    return templates.TemplateResponse("result.html", {"request": request, "result": result})

@app.get("/history")
async def history(request: Request):
    query = select([history])
    history_records = await query.fetch_all(query)
    return templates.TemplateResponse("history.html", {"request": request, "history_records": history_records})

@app.post("/token")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):

    user = authenticate_user(fake_users_db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    # Возвращаем токен (здесь должна быть реализация создания токена)
    return {"access_token": user.username, "token_type": "bearer"}

# Защищенный роут, требующий аутентификации
@app.get("/users/me", response_model=User)
async def read_users_me(current_user: User = Depends(authenticate_user)):
    return current_user

@app.on_event("startup")
async def startup():
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()