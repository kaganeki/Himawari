const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(Mzc3MTAxMTQ0Nzg4NDM0OTQ1.DVCwVw.lLnTVxOoZLg75PpzIlwCzY8JZHI);
