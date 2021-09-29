# Data 
## Item
+ An Item represents a item in the checkout page.
+ Each item contains the following properties:
    Name|Type|Default
    :---:|:---:|:---:
    name | string | ""
    price | double | 0.0
    icon | string | "coffee"
    isTaxed | boolean | false
    quantity | int | 1

## Order
+ An Order represents an order in the checkout page. When submiting, an Order is created, encapsulated and sent to the backend. 
+ Each order contains the following properties: 
    Name|Type|Default
    :---:|:---:|:---:
    orderList | List\<Item\> | [ ]
    price | double | 0.0
    client | string | "Unknown Client"
    date | string | ""

## Response\<T>
+ A response is a wrapper for the response of a http request. It contains the response item with type T.
+ Each response contains the following properties:
    Name|Type|Default
    :---:|:---:|:---:
    metadata | T | 
    responseTime | string | null
    code | int | 200
