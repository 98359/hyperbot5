const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "f?";

client.on('ready', () => {
	console.log('Bot has started!');
	client.user.setStatus('dnd');
	client.user.setActivity(f?help, {
        type: "LISTENING"
    })
});

client.on('message', message => {
	
	if (message.author.bot) return undefined;
	
	let msg = message.content.toLowerCase();
	let args = message.content.slice(prefix.length).split(' ');
	let command = args.shift().toLowerCase();
		
	try  {
      let commands = require(`./commands/${command}.js`);
      commands.run(client, message, args);
	} catch (e) {
      console.log(e.stack)
    } finally {
      console.log(command)
    }	  		 
});


