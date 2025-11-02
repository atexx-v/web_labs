from db import Base
from sqlalchemy.orm import Mapped, mapped_column

class Shoes(Base):
    __tablename__ = "shoes"

    id: Mapped[int] = mapped_column(primary_key=True)
    brand: Mapped[str] = mapped_column()
    price: Mapped[float] = mapped_column()
    size: Mapped[float] = mapped_column()
    color: Mapped[str] = mapped_column()

