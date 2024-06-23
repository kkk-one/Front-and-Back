from datetime import datetime
from pydantic import BaseModel


class User(BaseModel):
    username: str
    disabled: bool = False

class UserInDB(User):
    hashed_password: str


class History(BaseModel):
    request_id: int
    nickname: str
    request_date: datetime
    user_id: User

    class Config:
        orm_mode = True
