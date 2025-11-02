from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.orm import Session
from typing import List

from db import get_db, init_db
from models import Shoes
from schemas import ShoeCreate, ShoeUpdate, ShoeResponse

app = FastAPI(
    title="Shoes CRUD API",
    description="API для управління взуттям (створення, читання, оновлення, видалення)",
    version="1.0.0",
)


@app.on_event("startup")
async def startup_event():
    init_db()


@app.get("/", response_model=List[ShoeResponse], tags=["Shoes"])
async def get_all_shoes(db: Session = Depends(get_db)):
    shoes = db.query(Shoes).all()
    return shoes


@app.post("/shoes/", response_model=ShoeResponse, status_code=201, tags=["Shoes"])
async def create_shoe(shoe: ShoeCreate, db: Session = Depends(get_db)):
    db_shoe = Shoes(
        brand=shoe.brand, price=shoe.price, size=shoe.size, color=shoe.color
    )
    db.add(db_shoe)
    db.commit()
    db.refresh(db_shoe)
    return db_shoe


@app.get("/shoes/{shoe_id}", response_model=ShoeResponse, tags=["Shoes"])
async def get_shoe(shoe_id: int, db: Session = Depends(get_db)):
    shoe = db.query(Shoes).filter(Shoes.id == shoe_id).first()
    if not shoe:
        raise HTTPException(
            status_code=404, detail=f"Взуття з ID {shoe_id} не знайдено"
        )
    return shoe


@app.put("/shoes/{shoe_id}", response_model=ShoeResponse, tags=["Shoes"])
async def update_shoe(
    shoe_id: int, updated_shoe: ShoeUpdate, db: Session = Depends(get_db)
):
    shoe = db.query(Shoes).filter(Shoes.id == shoe_id).first()
    if not shoe:
        raise HTTPException(
            status_code=404, detail=f"Взуття з ID {shoe_id} не знайдено"
        )

    update_data = updated_shoe.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(shoe, field, value)

    db.commit()
    db.refresh(shoe)
    return shoe


@app.delete("/shoes/{shoe_id}", tags=["Shoes"])
async def delete_shoe(shoe_id: int, db: Session = Depends(get_db)):
    shoe = db.query(Shoes).filter(Shoes.id == shoe_id).first()
    if not shoe:
        raise HTTPException(
            status_code=404, detail=f"Взуття з ID {shoe_id} не знайдено"
        )

    db.delete(shoe)
    db.commit()
    return {"message": f"Взуття з ID {shoe_id} успішно видалено", "id": shoe_id}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
