'use strict';
const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./command')


client.on('ready', () => {
    console.log('ehuuu')

    command(client, ['arigami','zaver'], (message) => {
        message.channel.send('King')
    }),
    command(client, ['markus','daun'], (message) => {
        message.channel.send('sudba')
    }),    

    command(client, 'servers', (message) => {
        client.guilds.cache.forEach((guild) =>{
            message.channel.send (
                `${guild.name} всего ${guild.memberCount} ущерба`
            )
        })
    })

    command(client, ['уничтожение'], (message) => {
        if (message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.messages.fetch().then((results) => {
                message.channel.bulkDelete(results)
            })
        }
    })

    command(client, 'status', (message) =>{
        const content = message.content.replace('!status ','')

        client.user.setPresence({
            activity: {
                name:content,
                type:0,
            },
        })
    })
})

client.login(config.token);



  
//   // Create an event listener for new guild members
// client.on('guildMemberAdd', member => {
//     // Send the message to a designated channel on a server:
//     const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
//     // Do nothing if the channel wasn't found on this server
//     if (!channel) return;
//     // Send the message, mentioning the member
//         channel.send(`Welcome to the server, ${member}`);
// });
    

// // AVATAR//////////////////////////////////////////////////////
// client.on('message', message => {
//     if (message.content === 'my avatar') {
//         message.reply(message.author.displayAvatarURL());
//     }
// });



// // MESSAGE/////////////////////////////////////////////////////
// client.on('ready', () => {
//     console.log('запустился' + client.user.tag);
// })

// client.on('message', message => {
//     let text = 'markus';
//     if (message.content == 'zaver') message.channel.send('Dolbaeb');
//     else if (message.content == 'arigami') message.channel.send('Папа');
//     else if (message.content == text) message.channel.send('o4koshnik');
// })
