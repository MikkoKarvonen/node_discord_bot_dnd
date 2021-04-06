const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client();

const prefix = "!";
let season = 1;
let episode = 1;

client.on("message", function (message) {
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift();

  if (command === "event") {
    const date = new Date(args.shift());
    const name = args.join(" ");

    const localeDate = date.toLocaleString("fi-FI");
    message.reply(`
    🎲 DnD S${season <= 9 ? "0" + season : season}E${
      episode <= 9 ? "0" + episode : episode
    }${name ? `: ${name}` : ""} 🎲
    🕒 ${localeDate} 
    `);
  }

  if (command === "setEpisode") {
    episode = args.length > 0 ? args[0] : episode + 1;
  }

  if (command === "setSeason") {
    season = args.length > 0 ? args[0] : season + 1;
  }
});

client.login(process.env.TOKEN);
