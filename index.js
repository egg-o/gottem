// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

    client.user.setStatus('online');
    
	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply('Server info.');
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	} else if (commandName === 'crowd') {
        await interaction.reply(':PogO::PogO::PogO::PogO::PogO::PogO::PogO::PogO:\n:PogO::PogO::PogO::PogO::PogO::PogO::PogO::PogO:\n:PogO::PogO::PogO::PogO::PogO::PogO::PogO::PogO:');
    }
});

// Login to Discord with your client's token
client.login(token);