const amqp = require("amqplib");
const postServices = require("./postServices");
const { putNotificationInQueue } = require("./Notification-Queue");
const putInPostQueue = async (Post) => {
  const conn = await amqp.connect("amqp://localhost");
  const channel = await conn.createChannel();
  await channel.assertQueue("posts", { durable: true });

  await channel.sendToQueue("posts", Buffer.from(JSON.stringify(Post)), {
    persistent: true,
  });

  await channel.close();
  await conn.close();
};

const getFromPostQueue = async () => {
  const conn = await amqp.connect("amqp://localhost");
  const channel = await conn.createChannel();
  await channel.assertQueue("posts", { durable: true });
  channel.prefetch(1);
  channel.consume("posts", async (Msg) => {
    if (Msg.content) {
      // setTimeout(async () => {

      // }, 6000);
      let postToAdd = JSON.parse(Msg.content.toString());
      let Ans = await postServices.create(postToAdd);
      await channel.ack(Msg);

      await putNotificationInQueue(postToAdd);
    }
  });
};

module.exports = {
  putInPostQueue,
  getFromPostQueue,
};
