"use strict";
const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");
const welcome = require("./components/reactToMessages/wellcome");
const command = require("./command");
const privateMessage = require("./private-message");
// const roleClaim = require("./components/reactToMessages/role-claim");

client.on("ready", () => {
  console.log("ehuuu");

  welcome(client);

  // ОТКЛИК НА МОЙ НИКНЕЙМ...................................................
  command(client, ["ARIGAMI", "Arigami", "arigami"], (message) => {
    message.channel.send("Junior React developer");
  }),
    command(
      client,
      [
        "COMPLAINTFORME",
        "COMPLAINT",
        "Complaintforme",
        "complaintforme",
        "Complaint",
        "complaint",
      ],
      (message) => {
        message.channel.send("Junior Kotlin developer");
      }
    ),
    // КОЛИЧЕСТВО ЛЮДЕЙ НА СЕРВЕРЕ............................................
    command(client, "serverinfo", (message) => {
      const { guild } = message;

      const { name, region, memberCount, owner, afkTimeout } = guild;
      const icon = guild.iconURL();

      const embed = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle(`Server info for "${name}"`)
        .setThumbnail(icon)
        .addFields(
          {
            name: "Owner",
            value: owner,
          },
          {
            name: "\u200B",
            value: "\u200B",
          },
          {
            name: "Region",
            value: region,
            inline: true,
          },
          {
            name: "Members",
            value: memberCount,
            inline: true,
          },
          {
            name: "AFK Timeout",
            value: afkTimeout / 60,
            inline: true,
          }
        )
        .setImage(
          "https://cutewallpaper.org/21/hacker-logos/Hacker-Logo-Vectors-Photos-and-PSD-files-Free-Download.jpg"
        )
        .setTimestamp()
        .setFooter(
          "Copyright by Arigami ©",
          "https://i1.wp.com/www.youngpioneertours.com/wp-content/uploads/2020/03/russian-flag-russian-flag-russia-flag-of-russia.jpg?fit=1332%2C850&ssl=1"
        );

      message.channel.send(embed);
    });

  // УДАЛЕНИЕ ВСЕГО ЧАТА ЗА ЛАСТ 14 ДНЕЙ...................................
  command(client, ["уничтожение"], (message) => {
    if (message.member.hasPermission("ADMINISTRATOR")) {
      message.channel.messages.fetch().then((results) => {
        message.channel.bulkDelete(results);
      });
    }
  });
  // СТАТУС БОТА...........................................................
  command(client, "status", (message) => {
    const content = message.content.replace("!status ", "");

    client.user.setPresence({
      activity: {
        name: content,
        type: 0,
      },
    });
  });

  // РАБОТА С ПРИВАТНЫМИ СООБЩЕНИЯМИ.......................................
  privateMessage(
    client,
    "!freegift",
    "ХачТрюхач hacked your computer. Contact the admin for help (Arigami)"
  );

  // ПОМОЩНИК.............................................................
  command(client, "help", (message) => {
    message.channel.send(`
These are my supported commands:

**!help** -Display the help menu
**!serverinfo** - Information about this server
**!freegift** - Free discord $
`);

    const { prefix } = config;

    client.user.setPresence({
      activity: {
        name: `"${prefix}help" for help`,
      },
    });
  });
});

// role-CLAIM!!!/////////////////////////////////////////////////////
// roleClaim(client);

client.login(config.token);
