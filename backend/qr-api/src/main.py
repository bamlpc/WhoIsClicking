from fastapi import FastAPI
from pydantic import BaseModel
from typing import Union
import qrcode
import os

class Item(BaseModel):
    hunter: str
    prey: str
    action: Union[str, None] = None

async def create_qr_code(json_qr_data: dict):
    hunter = json_qr_data["hunter"]
    qr = qrcode.QRCode(
        version=1,
        box_size=10,
        border=5)
    qr.add_data(hunter)
    qr.make(fit=True)
    img = qr.make_image(fill='black', back_color='white')
    current = os.getcwd()
    os.chdir(f"{current}/qrs")
    img.save(f'qrcode_{hunter}.png')
    os.chdir(current)

app = FastAPI()

@app.post("/qr")
async def create_item(item: Item):
    await create_qr_code(item.dict())
    print('Created QR code for: ' + item.hunter)

    return item