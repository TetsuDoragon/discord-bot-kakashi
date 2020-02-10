const Discord = require('discord.js');
const kakashi = new Discord.Client();
const copy = require('./copy.js').start;

kakashi.login('TOKEN');
kakashi.on('error', console.error);

kakashi.once('ready', () => {
	console.log("Ready!");
});

kakashi.on('message', message =>{
	if (message.author.bot)
		return;

	var args = message.content.slice('!').trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	if(command === "!copy"){
		message.delete()
		copy(kakashi, message.author, args)
	}
	else if(command === "!fake"){
		message.delete()
		copy(kakashi, message.mentions.users.array()[0], args)
	}

	//else if(command === "!zabuza"){
	//	client.channel.send("Ushi, Sara, Oo, Nae, Ee, Tori, Ushi, Uma, Tori, Nae,"
	//						+" Tora, Inu, Tora, Mee, Ushi, Hitsuji, Mee, Ee, Hitsuji, Nae,"
	//						+" Jin, Sara, Tori, Tatsu, Tori, Ushi, Uma, Hitsuji, Tora, Mee,"
	//						+" Nae, Sara, Oo, Ee, Tatsu, Hitsuji, Nae, Ushi, Sara, Tori,"
	//						+" Jin, Nae, Ee, Tori.");
	//}
});
