exports.start  = async function(client,args){
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
	return s
}
