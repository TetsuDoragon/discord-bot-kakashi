const Discord = require('discord.js');
const kakashi = new Discord.Client();
const copy = require('./copy.js').start;
kakashi.login('NjMyNjc5MDE2OTQ3NTE1NDQx.XaI6bw.YGXoCxOig9SiHCtbmSlTxp4WD1M');
kakashi.on('error', console.error);


kakashi.once('ready', () => {
	console.log("Ready!");
});

kakashi.on('message', message =>{
	if (message.author.bot)return;
	var args = message.content.slice('!').trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	if(command === "!copy"){
		message.delete()
		copy(kakashi, message.author, args)
	}else 
	if(command === "!fake"){
		message.delete()
		copy(kakashi, message.mentions.users.array()[0], args)
	}

});

