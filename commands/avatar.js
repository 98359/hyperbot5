const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let user = message.mentions.users.first() || message.author;
		  
		  let embed = new Discord.RichEmbed()
		  .setAuthor(`${user.username} avatar`)
		  .setImage(user.displayAvatarURL)
		  .setColor('RANDOM')
		  
		  message.channel.send(embed)
		 
	   }