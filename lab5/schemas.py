from pydantic import BaseModel, Field
from typing import Optional


class ShoeBase(BaseModel):
    brand: str = Field(..., min_length=1, max_length=100, description="Бренд взуття")
    price: float = Field(..., gt=0, description="Ціна взуття (має бути більше 0)")
    size: float = Field(..., gt=0, le=60, description="Розмір взуття")
    color: str = Field(..., min_length=1, max_length=50, description="Колір взуття")


class ShoeCreate(ShoeBase):
    pass


class ShoeUpdate(BaseModel):
    brand: Optional[str] = Field(None, min_length=1, max_length=100)
    price: Optional[float] = Field(None, gt=0)
    size: Optional[float] = Field(None, gt=0, le=60)
    color: Optional[str] = Field(None, min_length=1, max_length=50)


class ShoeResponse(ShoeBase):
    id: int

    class Config:
        from_attributes = True
