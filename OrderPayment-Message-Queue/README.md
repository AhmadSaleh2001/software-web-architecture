# Order Payment Project

This project is an order payment system that utilizes RabbitMQ as a message queue for asynchronous processing. When a client sends a request for an order, it is added to the order queue. The system then processes each order one by one by a consumer. Similarly, when a payment is added to a specific order, it is placed in a payment queue for processing.

## Technologies Used

- Node.js
- Express
- Sequelize
- RabbitMQ

## Prerequisites

To run this project, you need to have the following installed on your system:

- Node.js: Install Node.js by visiting [nodejs.org](https://nodejs.org/) and following the installation instructions.
- RabbitMQ server: Visit the [official RabbitMQ website](https://www.rabbitmq.com/) for installation instructions.

## Setup Instructions

1. Clone the repository:
   git clone https://github.com/your-username/order-payment.git

2. Navigate to the project directory:
   cd order-payment

3. Install the dependencies:
   npm install

4. Configure RabbitMQ:

- Start the RabbitMQ server.
- Make sure the RabbitMQ server is running on the default configuration (localhost:5672).

## Usage

1. Start the application:
   npm start

The application will start running on `http://localhost:1212`.

2. To send a request for an order, make a POST request to `http://localhost:1212/orders` with the order details in the request body. The order will be added to the order queue.

3. To add a payment to a specific order, make a POST request to `http://localhost:1212/payment/confirm` with the payment details in the request body. The payment will be added to the payment queue for processing.

4. The consumer will automatically start processing orders and payments from their respective queues. Each order takes approximately 6 seconds to fully execute. You can monitor the console output to see the processing status.

## Why Use Queue for Asynchronous Programming?

Asynchronous programming using queues offers several advantages:

- **Decoupling**: Queues allow for loose coupling between components. The sender can add messages to the queue without waiting for the receiver to process them immediately, enabling independent development and scalability.
- **Concurrency**: By processing messages asynchronously, multiple tasks can be executed concurrently. This improves overall system performance and responsiveness.
- **Reliability**: Messages in the queue are persisted until processed, ensuring that no data is lost in case of failures or system downtime.
- **Scalability**: Queues enable horizontal scaling by distributing the workload across multiple consumers. This allows for better utilization of resources and improved throughput.

## Contributing

Contributions to this project are welcome. If you encounter any issues or have suggestions for improvements, please feel free to submit a pull request or create an issue in the project repository.

## Acknowledgements

This project was built using Node.js, Express, Sequelize, and RabbitMQ. We would like to express our gratitude to the creators and contributors of these open-source technologies for their valuable contributions to the development community.
