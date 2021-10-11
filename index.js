// Require the necessary discord.js classes
const { Client, Intents, Collection } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// client.commands = new Collection();

// client.on('interactionCreate', async interaction => {
// 	if (!interaction.isCommand()) return;
    
// 	const { commandName } = interaction;

// 	if (commandName === 'ping') {
// 		await interaction.reply('Pong!');
// 	} else if (commandName === 'crowd') {
//         await interaction.reply(':PogO::PogO::PogO::PogO::PogO::PogO::PogO::PogO:\n:PogO::PogO::PogO::PogO::PogO::PogO::PogO::PogO:\n:PogO::PogO::PogO::PogO::PogO::PogO::PogO::PogO:');
//     }
// });

client.on('message', async msg => {
    if (msg.content === 'crowd') {
        await msg.reply("who");
        console.log("pogno");
    
    }
    console.log("recieving");

});
// Login to Discord with your client's token
client.login(token);