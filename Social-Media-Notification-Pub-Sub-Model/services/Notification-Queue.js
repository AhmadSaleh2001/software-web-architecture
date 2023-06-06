// lets assume current id for user publisher is 1
const senderID = parseInt(process.argv[3]);
const amqp = require("amqplib");
const userServices = require("./userServices");

const putNotificationInQueue = async (Post) => {
  const conn = await amqp.connect("amqp://localhost");
  const channel = await conn.createChannel();

  const exchg_name = "notifications";
  await channel.assertExchange(exchg_name, "direct", {
    durable: true,
  });
  await channel.publish(
    exchg_name,
    "notification_post_for_user_" + senderID,
    Buffer.from(JSON.stringify(Post), { persistent: true })
  );

  await channel.close();
  await conn.close();
};

async function NotificationConsumer() {
  let Follows = await userServices.getWhoIFollow(senderID);
  let con = await amqp.connect("amqp://localhost");
  let channel = await con.createChannel();
  await channel.assertExchange("notifications", "direct", { durable: true });
  let Q = await channel.assertQueue("");
  Follows.forEach(async (Friend) => {
    await channel.bindQueue(
      Q.queue,
      "notifications",
      "notification_post_for_user_" + Friend.dataValues.user_follow
    );
  });
  channel.consume(
    Q.queue,
    (Msg) => {
      if (Msg) {
        let Data = JSON.parse(Msg.content.toString());
        console.log(Data);
      }
    },
    {
      noAck: false,
    }
  );
}

module.exports = {
  putNotificationInQueue,
  NotificationConsumer,
};
