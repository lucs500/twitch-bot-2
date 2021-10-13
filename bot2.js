require('dotenv').config();
const tmi = require('tmi.js');

// Define configuration options
const opts = {
  identity: {
    username: process.env.TWITCH_BOT_USERNAME,
    password: process.env.TWITCH_OAUTH_TOKEN
  },
  channels: [
	'#gaules',
	'#murilo_RT',
	'#hayashii',
	'#mch_agg',
	'#SkipNhO',
    	'#SkipNhOLIVE',
	'#brnwowzk1',
	'#csrfps',
	'#boltz',
	'#velhovamp1',
	'#frostezor',
	'#deercheerup',
	'#clutchcircuit',
	'#cbcsbr',
	'#paulanobre',
	'#gio_fps',
    	'#ablej',
	'#luginbr',
	'#jonvlogs',
	'#conezinho',
	'#waveigl',
	'#gamersclubcs',
	'#StreamieBR',
	'#baiano',
	'#axtlol',
	'#4lanlol',
	'#yeTz',
	'#vsmzin',
	'#VELLOSO',
	'#cellinrj',
	'#tinowns',
    	'#ayellol',
    	'#nobru',
    	'#blxckoutz',
    	'#casimito',
    	'#Casemiro',
   	'#okingbr',
	'#lagonis',
    	'#lannik1',
    	'#clovaobengala',
    	'#wastzera',
    	'#lukao150',
    	'#zigueira',
    	'#surskity',
    	'#bt0tv',
    	'#vovo',
    	'#giozinhabr',
    	'#luketaszz',
    	'#ranhogamer',
    	'#bjamfps',
    	'#pemirestate',
    	'#luskinha156',
    	'#caqss_',
    	'#mandyzz',
    	'#stainzincs',
    	'#tp_skins',
    	'#mmaktribo',
    	'#jument1nho',
    	'#fbzfps',
    	'#zedotiru',
    	'#ely7',
    	'#loud_gs',
    	'#seucreysonreborn',
    	'#tiburciand0',
   	'#babiipzz',
   	'#barr4k',
   	'#luluz1nhafps',
   	'#brargento',
   	'#miguelehm',
   	'#rafaduffcs',
   	'#ivdmaluco',
   	'#padingod',
   	'#teamjokerz',
    	'#johnpittertv',
        '#djoko',
    	'#deabraba',
        '#paitambemjoga',
    	'#raulzitoyt',
   	'#tiagovski555yt',
        '#1drakonz',
   	'#thomefn',
  	'#renansouzones',
        '#faah',
    	'#dilera',
	'#sonecarox',
    	'#sr_thulium',
    	'#att_oficial',
    	'#buerinho',
    	'#dukoth',
    	'#gabssf',
    	'#rodil',
    	'#sinxplaysbr',
    	'#24horason',
    	'#rubini',
    	'#bianquinha182',
    	'#sacy',
    	'#mojaksz',
    	'#Mylonzete',
    	'#c9judite',
    	'#saullo',
    	'#klauslol1',
    	'#zakl1k',
    	'#anarqui4',
    	'#gemadaotv',
    	'#StolenBR'
  ]
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

client.connect();

var message = { username : '', command : '' };
function onMessageHandler (target, context, msg, self) {
  
  if (self) { return; } // Ignore messages from the bot
  
  message.username = context.username.trim();
  message.command = msg.trim();
  
  if (opts.channels.find(function(a){return a==target}) !== null) {
    
	  //EXEMPLO DE COMANDO QUE POSSUI ARGUMENTOS
	  /*if (message.command.split(" ")[0] === "!cu") {
		client.say(target,  ' !points g0nck');
	  }*/
	  
	  //EXEMPLO DE REGEX
	  /*if (message.command.match(/mery/i) !== null || message.command.match(/meri/i) !== null) {
		client.say(target, '@'+message.username+' pffffffff! SmoocherZ ');  
	  }
	  */
  }
  
} 

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
	console.log(`* Connected to ${addr}:${port}`);
	opts.channels.forEach(function(channel) {
		//socket.emit('link', channel);
		console.log('* Dando boas vindas ao canal '+channel);
	});
}