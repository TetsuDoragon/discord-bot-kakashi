const webhook = require("webhook-discord")
const Hook = new webhook.Webhook("https://discordapp.com/api/webhooks/633492005607047179/6kDZJj9_FOKkvhyLPyxO0lLOXJNIwFJgnY5zFYDGnS6IpPaGIG8PvfAsEwbLUYX14w6Z")



exports.sendMessage = async function(user, message){

	const msg = await new webhook.MessageBuilder()
	                .setName(user.username)
	                .setText(message)
	                .setAvatar(user.avatarURL)
	Hook.send(msg);
}