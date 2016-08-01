var Discord = require("discord.js");

var mybot = new Discord.Client();

mybot.on("message", function(message) {
	if(message.content === "!js") {
		mybot.reply(message, "hi");
	}
});

mybot.loginWithToken("MTc0MDQ2MjE4MTkwNzE2OTI5.CnPJMA.LLU19JUEfd_kiD6y_4hj5EW9xCQ");
