const Discord = require ('discord.js')
const config = require ('./config.json')

const client = new Discord.Client ()
const command = require ('./command.js')

client.on('ready', (message) => {
    console.log ('I am ready to start')
})

      command (client, 'about', (message) => {
          message.channel.send ('I am here made by Kavin')
      })

      command (client, 'serverlist', (message) => {
        message.channel.send (guild_name, 'has totaly', guild_members)
    })

client.login (config.token)