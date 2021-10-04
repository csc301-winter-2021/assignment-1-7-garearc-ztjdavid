# API

## Order
Method | Path | Param | Description
:---:|:---:|:---:|:---:
POST | /api/order | Order | Add a new order into database.
GET | /api/order/{uuid} | null | Retrive an order with uuid from database if possible.
GET | /api/order/summary/{uuid} | null | Summarize an order with uuid.   