const amqp = require("amqplib");

async function consumer(G) {
  let con = await amqp.connect("amqp://localhost");
  let channel = await con.createChannel();
  await channel.assertExchange("changer", "fanout");
  let Q = await channel.assertQueue("", { exclusive: true });

  console.log("wait");
  await channel.bindQueue(Q.queue, "changer");
  channel.consume(Q.queue, (Msg) => {
    if (Msg.content) {
      console.log(G + " " + Msg.content.toString());
    }
  });
}
consumer("Group 1");
consumer("Group 2");
