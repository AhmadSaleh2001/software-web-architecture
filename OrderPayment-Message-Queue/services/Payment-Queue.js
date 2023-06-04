const amqp = require("amqplib");
const paymentServices = require("./paymentServices");
const putInPaymentQueue = async (payment) => {
  const conn = await amqp.connect("amqp://localhost");
  const channel = await conn.createChannel();
  await channel.assertQueue("payments", { durable: true });

  await channel.sendToQueue("payments", Buffer.from(JSON.stringify(payment)), {
    persistent: true,
  });
  console.log("payment Added To Queue");

  await channel.close();
  await conn.close();
};

const getFromPaymentQueue = async () => {
  const conn = await amqp.connect("amqp://localhost");
  const channel = await conn.createChannel();
  await channel.assertQueue("payments", { durable: true });
  channel.prefetch(1);
  channel.consume("payments", async (Msg) => {
    if (Msg.content) {
      let paymentToAdd = JSON.parse(Msg.content.toString());
      let Ans = await paymentServices.confirmOrder(paymentToAdd.orderId);
      await channel.ack(Msg);

      console.log("payment : " + Ans.id + " consumed");
    }
  });
};

module.exports = {
  putInPaymentQueue,
  getFromPaymentQueue,
};
