# N-Tier

Meaning Specific Idea Divided into serveral Layers


# Simple Demo Of N-Tier Application Architecture

This is a Express REST API project developed using NodeJs and MySql for demonstrating the N-Tier Application

## Features

api for simulate e-commerce

## Technology Stack

- NodeJs
- Express
- MySql

## Getting Started

To get started with this project, follow these steps:

- Clone this repository to your local machine.
- Install mysql and create a database called n_tier.
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
