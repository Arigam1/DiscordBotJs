module.exports = (client) => {
  const channelId = "573648406854107139";

  client.on("guildMemberAdd", (member) => {
    console.log(member);
    const message = `PLS WLC <@${member.id}> to the server`;

    const channel = member.guild.channels.cache.get(channelId);
    channel.send(message);
  });
};
