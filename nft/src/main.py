from typing import Union
from fastapi import FastAPI
from fastapi.responses import FileResponse
from pydantic import BaseModel
import qrcode
import os

class Item(BaseModel):
    probe: str
    review: str
    action: Union[str, None] = None

async def create_qr_code(json_qr_data: dict):
    hunter = json_qr_data["probe"]
    qr = qrcode.QRCode(
        version=1,
        box_size=10,
        border=5)
    qr.add_data(hunter)
    qr.make(fit=True)
    img = qr.make_image(fill='black', back_color='white')
    os.chdir(f"{os.getcwd()}/qrs")
    img.save(f'qrcode_{hunter}.png')

app = FastAPI()

@app.post("/qr")
async def create_item(item: Item):
    await create_qr_code(item.dict())
    print('Created QR code for: ' + item.probe)

    return item