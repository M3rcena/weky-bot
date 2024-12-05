import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

import { ExtendedClient } from "../..";

export default {
    data: new SlashCommandBuilder()
        .setName('fight')
        .setDescription('Fight with someone')
        .addUserOption(option => option.setName('whom').setDescription('Whom to fight with?').setRequired(true)),
    async execute(interaction: ChatInputCommandInteraction, client: ExtendedClient) {
        if (!interaction.isChatInputCommand()) return;

        if (!interaction.channel || !interaction.guild || !interaction.member) return;


        const opponent = interaction.options.getUser('whom');
        if (!opponent) return interaction.reply({
            content: "Please mention a user to fight with",
        });

        return await client.WekyManager.createFight({
            interaction: interaction,
            client: client,
            opponent: opponent,
            embed: {
                title: `Fight | M3rcena Development`,
                color: 'Blurple',
            }
        });
    }
};