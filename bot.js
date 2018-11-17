const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
    setInterval(async function() {

  
  
        let status = ['auf PandaGames', 'auf PandaGames | /help', 'die ?²', 'discord.gg/zwPzmxm', 'auf PandaGames | /help'];
        let chosen = status[Math.floor(Math.random() * status.length)];
      
        bot.user.setActivity(chosen, {type: "PLAYING"});
      
      
      
    }, 8000);
    

    try {
        let link = await bot.generateInvite(["ADMINISTRATOR"]);
        console.log(link);
    } catch(e) {
        console.log(e.stack);
    }

});
client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('der Ping beträgt: **0,1ms**');
  	}
});
client.on('message', message => {
	if(message.content === 'Hallo') {
		message.reply('hey :wave: wie geht's');
	} 
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
