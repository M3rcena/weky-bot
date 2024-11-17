import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

import { ExtendedClient } from "../..";

export default {
    data: new SlashCommandBuilder()
        .setName('shuffle-guess')
        .setDescription('ShuffleGuess Command'),
    async execute(interaction: ChatInputCommandInteraction, client: ExtendedClient) {
        if (!interaction.isChatInputCommand()) return;

        if (!interaction.channel || !interaction.guild || !interaction.member) return;

        return await client.WekyManager.createShuffleGuess({
            interaction: interaction,
            client: client,
            embed: {
                title: `ShuffleGuess | M3rcena Development`,
                color: 'Blurple',
            }
        });
    }
};