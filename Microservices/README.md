# Microservice Architecture

separate application down into set of small independent services that communicate
with each other using light weight protocols such that HTTP or message queue

# Simple Demo Of Microservice Application Architecture

This is a Express REST API project developed using NodeJs and MySql for demonstrating the Microservice Application

## Features

api for simulate e-commerce

## Main Services

- **Product Service**: Responsible for managing the products available on the website. This includes features like adding, updating, and deleting products, as well as managing product categories and attributes.
- **Order Service**: Responsible for creating and cancelling orders made by customers.
- **Cart Service**: Responsible for managing the shopping cart and adding products to it.
- **User Service**: Responsible for managing the customers.

## Technology Stack

- NodeJs
- Express
- MySql

## Getting Started

To get started with this project, follow these steps:

- Clone this repository to your local machine.
- Install mysql and create a set of databases called users-db , products-db , carts-db , orders-db.
- run npm install for each service
- user , products , carts and orders services have these local ports (1212 , 1213 , 1214 , 1215) respectively

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
