from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DATETIME
from sqlalchemy.orm import relationship
from .database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    disabled = Column(Boolean, default=False)

    history = relationship("History", back_populates="user")


class History(Base):
    __tablename__ = "history"

    request_id = Column(Integer, primary_key=True)
    nickname = Column(String)
    request_date = Column(String)
    user_id = Column(Integer, ForeignKey("users.id"))
    user = relationship("User", back_populates="history")

