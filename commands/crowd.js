const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('crowd')
		.setDescription('Builds a Crowd!'),
	async execute(interaction) {
		await interaction.reply(':PogO::PogO::PogO::PogO::PogO::PogO::PogO::PogO:\n:PogO::PogO::PogO::PogO::PogO::PogO::PogO::PogO:\n:PogO::PogO::PogO::PogO::PogO::PogO::PogO::PogO:');
	},
};