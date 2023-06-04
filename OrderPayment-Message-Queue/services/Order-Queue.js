const amqp = require("amqplib");
const orderServices = require("../services/orderServices");
const putInOrderQueue = async (Order) => {
  const conn = await amqp.connect("amqp://localhost");
  const channel = await conn.createChannel();
  await channel.assertQueue("orders", { durable: true });

  await channel.sendToQueue("orders", Buffer.from(JSON.stringify(Order)), {
    persistent: true,
  });
  console.log("Order " + " Added To Queue");

  await channel.close();
  await conn.close();
};

const getFromOrderQueue = async () => {
  const conn = await amqp.connect("amqp://localhost");
  const channel = await conn.createChannel();
  await channel.assertQueue("orders", { durable: true });
  channel.prefetch(1);
  channel.consume("orders", async (Msg) => {
    if (Msg.content) {
      setTimeout(async () => {
        let orderToAdd = JSON.parse(Msg.content.toString());
        let Ans = await orderServices.createOrder(orderToAdd);
        await channel.ack(Msg);

        console.log("Order : " + Ans.id + " consumed");
      }, 6000);
    }
  });
};

module.exports = {
  putInOrderQueue,
  getFromOrderQueue,
};
