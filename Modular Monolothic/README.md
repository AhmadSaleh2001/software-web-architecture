# Modular Monolothic

the system is divided into independent modules, which can be developed and tested separately, 
but they are deployed together as a single monolithic application.
difference between Modular Monolothic and N-Tier(Layers)
that Each Module can be separate it into some layers
so Modular Monolothic its more general we can assume it

# Simple Demo Of Modular Monolothic Application Architecture

This is a Express REST API project developed using NodeJs and MySql for demonstrating the Modular-Monolothic Application

## Features

api for simulate e-commerce

## Technology Stack

- NodeJs
- Express
- MySql

## Getting Started

To get started with this project, follow these steps:

- Clone this repository to your local machine.
- Install mysql and create a database called modular_monolothic.
- run npm install
- enjoy

## API Endpoint

The following API endpoints are available:

## add user

POST /user/

Sample Request Body

```json
{
  "firstName": "ahmad",
  "lastName": "mohammad",
  "email": "mohammad@gmail.com",
  "password": "mohammad1212"
}
```

## delete user

DELETE /user/

## add product

POST /product/

Sample Request Body

```json
{
  "name": "prod2",
  "description": "nice product 222",
  "price": 50,
  "image": "prod2.jpg"
}
```

## delete product

DELETE /product/

## add product to cart

POST /cart/

Sample Request Body

```json
{
  "userId": 1,
  "productId": 1,
  "quantity": 1
}
```

## confirm order cart

POST /order/

Sample Request Body

```json
{
  "userId": 1
}
```
