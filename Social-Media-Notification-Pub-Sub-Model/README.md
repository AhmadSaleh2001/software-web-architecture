# Pub-Sub Model Simulation - Social Media App

This project simulates a social media application using the publish-subscribe (pub-sub) model. The application is built using Node.js, Express, Sequelize, and RabbitMQ. The main goal of the project is to demonstrate how the pub-sub model can be implemented to enable users to follow and receive posts from other users.

![2023-06-06-11-49-04](https://github.com/AhmadSaleh2001/software-web-architecture/assets/79485253/a66877d5-7147-45fe-9e60-cd421a9d8264)

## Features

- Users can publish posts.
- Users can follow other users.
- Users receive notifications when the users they follow publish new posts.
- Posts are stored in queues and consumed by users who follow the publishing users.

## Prerequisites

To run this application, you need to have the following installed:

- Node.js
- MySQL database (Make sure the MySQL server is up and running)
- RabbitMQ (Make sure the RabbitMQ server is up and running)

## Installation

1. Create a MySQL database named `social_media_notification_pub_sub_model`.
2. Navigate to the project directory: `cd pub-sub-social-media`
3. Install the dependencies: `npm install`

## Running the Application

To run the application, follow the steps below:

1. Open three terminals or command prompt windows.
2. In the first terminal, run the following command: `node app.js 1111 1`
   - This will start the server for User 1 on port 1111 with a senderID of 1.
3. In the second terminal, run the following command: `node app.js 2222 2`
   - This will start the server for User 2 on port 2222 with a senderID of 2.
4. In the third terminal, run the following command: `node app.js 3333 3`
   - This will start the server for User 3 on port 3333 with a senderID of 3.

## Usage

Once the application is up and running, you can perform the following actions:

- User 1 can publish a post by making a POST request to `http://localhost:1111/post/create` with the following payload:
  {
  "body" : "post from user 1_1",
  "userId" : 1
  }

- User 2 and User 3 can publish posts in a similar way on their respective ports.
- When User 1 publishes a post, it will be pushed to User 2's queue because User 2 is subscribed to User 1.
- When User 2 or User 3 publish posts, User 1 will receive a notification and can consume these posts from their queue because they follow the publishing users.

## Conclusion

The pub-sub model implemented in this project showcases how a social media application can leverage the concept of publishing and subscribing to enable users to follow and receive posts from other users. This can serve as a foundation for building more complex applications with real-time messaging and notification systems.
