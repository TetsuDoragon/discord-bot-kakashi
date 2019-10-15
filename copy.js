const wh = require('./WebHook.js');

exports.start  = async function(client,user,args){
	if (args[0][0] === '@'){
		args.splice(0, 1)
	}
	var s = ""
	for (var i = 0; i < args.length; i++) {
		var em = await client.emojis.find(emoji => {
			if(emoji.name.toLowerCase() === args[i].toLowerCase()){
				return emoji
			}
		});
		if(em === null || em === undefined){
			s += args[i]+" "
		}else{
			s += em+" "
		}
		
	}
	wh.sendMessage(user, s);
}
