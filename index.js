const Discord = require("discord.js");
const client = new Discord.Client();
const {
	JsonDatabase
} = require("wio.db");
const db = new JsonDatabase("db");
var kanal = "KANAI D";
var sahip = "SAHIP ID";

client.on("ready",()=>{
	console.log("Hazır ! ");
});

//Furkan !rqyz

setInterval(function(){
	if(db.get("owodg") != "1"){
		client.channels.get(kanal).send("owo h");
	};
},20000);

setInterval(function(){
	if(db.get("owodg") != "1"){
		client.channels.get(kanal).send("wb");
	};
},27000);


setInterval(function(){
	if(db.get("owodg") != "1"){
		client.channels.get(kanal).send("!rqyz GURURLA SUNAR!");
	};
},27000);

//Furkan !rqyz

client.on("message",message=>{
	if(message.channel.id==kanal || message.channel.type == "dm"){
		if(message.author.id=="408785106942164992"){
			if(message.content.includes("Beep Boop") || message.content.includes("Please DM me") || message.content.includes("human") || message.content.includes("check")){
				db.set("owodg","1");
				message.channel.send("DURDURULDU! <@778382988786401280>");
			};
		};
	};

	if(message.author.id == sahip){
		if(message.content == "!aç"){
			db.set("owodg","0");
			message.channel.send("Açıldı");
		};
	};
});

//Furkan !rqyz


client.login("TOKEN");
