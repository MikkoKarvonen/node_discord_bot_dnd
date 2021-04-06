const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client();

const prefix = "!";

client.on("message", function (message) {
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift();

  if (command === "event") {
    message.reply(`New event.`);
  }
});

client.login(process.env.TOKEN);
