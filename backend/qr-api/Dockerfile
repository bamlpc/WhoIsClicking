FROM python:3.9-slim as base

COPY ./requirements.txt /app/requirements.txt

WORKDIR /app

RUN pip install --upgrade -r requirements.txt 
#--no-cache-dir

COPY ./src ./src
EXPOSE 80

CMD ["uvicorn", "src.main:app", "--host=0.0.0.0", "--port", "80", "--reload"]