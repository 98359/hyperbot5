const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "."

client.on('ready', () => {
  client.user.setGame('configuring... ' , 'https://www.twitch.tv/lucasdavid913/')
})   

  client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith(prefix+ "say")) {
    message.delete()
    const embed = new Discord.RichEmbed()
    .setDescription(args.join(" "))
    .setColor(0xFF000)
   message.channel.sendEmbed(embed);
  }

});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith(prefix+ "help")) {
    const embed = new Discord.RichEmbed()
    .setTitle('BOT INFO')
    .setDescription(`•prefix --> .
BOT COMMANDS
• || .mass || .support || .info || .say || .ping || .serverinfo || .restart || `)
    .setColor(0xFF000)
   message.channel.sendEmbed(embed);
  }

});

client.on('message', message => {
    if (message.author.id == '397666298483703810') {
    if (message.content.startsWith(`.restart`)) {
            resetBot(message.channel);
    }
  }
});

// Turn bot off (destroy), then turn it back on
function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Restarting...')
    .then(msg => bot.destroy())
    .then(() => bot.login(process.env.TOKEN));
}

 

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);
  
if ( message.content.startsWith(prefix+ "ping")) {
    let embed = new Discord.RichEmbed()
            .setTitle('Ping')
            .setDescription(`\`\`\`md\nPing :${client.ping}ms\`\`\``)
            .setColor(0x4caf50)
            .setFooter('Bot pinged')
            .setTimestamp()
        
        message.channel.send(embed);
  }
  
});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);
  
if (message.content.startsWith(prefix + 'serverinfo')) {
  const embed = new Discord.RichEmbed()
  embed.addField('Members', message.guild.memberCount, true)
  embed.addField('Name', message.guild.name, true)
  embed.addField('Region', message.guild.region, true)
  embed.addField('Owner', message.guild.owner, true)
  embed.addField('ID', message.guild.id, true)
  embed.setColor(`ff0000`)
  embed.setThumbnail(message.guild.iconURL)
  message.channel.sendEmbed(embed)
}
  
});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith("https://discord.gg")) {
    message.delete()
    let embed = new Discord.RichEmbed()
            .setTitle('No Invite Link')
            .setColor(0xff0000)
            .setFooter('No invite link!')
            .setTimestamp()
        
        message.channel.send(embed);
  }

});  

  client.on('message', message => {    
    if(message.content.startsWith('.mass')) {
    if(message.author.id === "397666298483703810" ||
message.author.id === "397666298483703810"){
       let args = message.content.split(" ").slice(1);         
       var argresult = args.join(" ")      
const argsresult = args.join(" ")         
       let reason = args.join(" ")                   
    if(!args[1]) {  }  
    if(args[1]) { 
message.channel.guild.members.forEach(member => {{ 
member.send(reason)
message.delete() }})}}} });

client.on('message', msg => {
    if (msg.content === '.invite') {
      msg.channel.send('Invite **Daminian** https://discordapp.com/api/oauth2/authorize?client_id=457549646525628437&permissions=8&scope=bot :tada:');
    }
  });

client.on('message', msg => {
    if (msg.content === '.support') {
      msg.channel.send('support server ---> https://discord.gg/bprBytJ');
    }
  });

client.on('message', msg => {
    if (msg.content === '.info') {
      msg.channel.send('pentru welcome creaza un channel pe nume `welcome-goodbye` :) ');
    }
  });

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome-goodbye');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('#FF000')
        .setThumbnail(memberavatar)
        .addField('✘ | Name: ', `${member}`)
        .addField('✘ | Welcome !', `Welcome ${member}`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

client.login(process.env.TOKEN);
