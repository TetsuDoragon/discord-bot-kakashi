const webhook = require("webhook-discord")
const Hook = new webhook.Webhook("https://discordapp.com/api/webhooks/633490341651283989/javkUzUtCDzdpKk5kRVpak5RL_ZhUz17EfuS8JqZcGE9uaRZEDMtmBzYBC8koza5wMVK")



exports.sendMessage = async function(user, message){

	const msg = await new webhook.MessageBuilder()
	                .setName(user.username)
	                .setText(message)
	                .setAvatar(user.avatarURL)
	Hook.send(msg);
}