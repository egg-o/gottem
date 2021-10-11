// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES] });

// When the client is ready, run this code (only once)
client.on('ready', () => {
	console.log('Ready! Logged in as ' + client.user.tag);
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'trick') {
		await interaction.reply('or Treat!');
	}
    console.log(interaction);
});

client.on('messageCreate', message => {

    const key = message.guildId;

    if (message.content === 'credit-card') {
        message.channel.send('Hey Fortniters! John Wick needs your help to escape tilted towers! The only way that he can do that is with your credit card number, the three numbers on the back, and the expiration month and year. Hurry, it’s not long before he gets wrecked by epic gamers.');
		console.log('Great Success');
	} 
    if (message.content === 'help -kermit') {
        message.channel.send('no. ');
	} 
    if (message.content === '!crowd') {
        const d = Math.random() * 10;
        if (message.guildId === '819740106743218186') {
            if (d > 2) {
                message.channel.send('<:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> \n<:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> \n<:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> \n<:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> \n<:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> <:PogO:870545068094816286> ')
            }
            else {
                message.channel.send('<:donkIgnore:897254092827668550>');
                console.log('GET FUCKED');
            }
            return;
        } 
        if (d > 2) {
            message.channel.send('<:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> \n<:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> \n<:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> \n<:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> \n<:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> <:PogO:897056283792928798> ');
        }
        else {
            message.channel.send('<:donkIgnore:897254092827668550>');
            console.log('GET FUCKED');
        }

	}
});

client.login(token);