const Discord = require('discord.js')

exports.run =(client, message, args) => {

  if(isNaN(args[0])) return message.channel.send('Please provide a valid amout to purge or delete messages!');
  if (args[0] > 100) return message.channel.send('Supply a amout less than 100!');
	
  message.channel.bulkDelete(args[0])
  message.channel.send('messages deleted succesfully :thumbsup: ')	
};
