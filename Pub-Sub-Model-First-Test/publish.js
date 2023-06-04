const amqp = require("amqplib");

async function publish(Message) {
  let con = await amqp.connect("amqp://localhost");
  let channel = await con.createChannel();
  await channel.assertExchange("changer", "fanout");
  await channel.publish("changer", "", Buffer.from(JSON.stringify(Message)));
  console.log("message sended");
}
let Obj = {
  name: "ahmad",
  age: 22,
};
publish(Obj);
