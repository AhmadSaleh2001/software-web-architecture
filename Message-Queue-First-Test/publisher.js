const amqp = require("amqplib");

let Obj = {
  name: "ahmad",
  age: 2323,
};
async function publish(message) {
  try {
    const conn = await amqp.connect("amqp://localhost");
    const channel = await conn.createChannel();
    const result = await channel.assertQueue("jobs", { durable: true });

    channel.sendToQueue("jobs", Buffer.from(JSON.stringify(message)), {
      persistent: true,
    });
    console.log("Sending ... ");
  } catch (err) {
    console.log(err);
  }
}
for (let i = 1; i <= 10; i++) {
  publish({
    ...Obj,
    name: "ahmad" + i,
  });
}
