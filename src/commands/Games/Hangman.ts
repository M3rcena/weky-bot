import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

import { ExtendedClient } from "../..";

export default {
    data: new SlashCommandBuilder()
        .setName('hangman')
        .setDescription('Hangman Command'),
    async execute(interaction: ChatInputCommandInteraction, client: ExtendedClient) {
        if (!interaction.isChatInputCommand()) return;

        if (!interaction.channel || !interaction.guild || !interaction.member) return;

        return await client.WekyManager.createHangman({
            interaction: interaction,
            client: client,
            embed: {
                title: `Hangman | M3rcena Development`,
                color: 'Blurple',
            }
        });
    }
};