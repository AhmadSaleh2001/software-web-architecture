const amqp = require("amqplib");

async function ProcessMessage(Msg) {
  return new Promise((Res, Rej) => {
    setTimeout(() => {
      Res("Done : " + Msg.name);
    }, 5000);
  });
}

async function consume() {
  try {
    const conn = await amqp.connect("amqp://localhost");
    const channel = await conn.createChannel();
    channel.prefetch(1);

    const result = await channel.assertQueue("jobs", { durable: true });

    channel.consume("jobs", async (Msg) => {
      if (Msg !== null && Msg.fields !== null) {
        let Ans = await ProcessMessage(JSON.parse(Msg.content.toString()));
        console.log(Ans);
        channel.ack(Msg);
      }
    });

    console.log("Waiting ...");
  } catch (err) {
    console.log(err);
  }
}
consume();
