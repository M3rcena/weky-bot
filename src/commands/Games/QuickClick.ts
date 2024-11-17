import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

import { ExtendedClient } from "../..";

export default {
    data: new SlashCommandBuilder()
        .setName('quickclick')
        .setDescription('QuickClick Command'),
    async execute(interaction: ChatInputCommandInteraction, client: ExtendedClient) {
        if (!interaction.isChatInputCommand()) return;

        if (!interaction.channel || !interaction.guild || !interaction.member) return;

        return await client.WekyManager.createQuickClick({
            interaction: interaction,
            client: client,
            embed: {
                title: `QuickClick | M3rcena Development`,
                color: 'Blurple',
            }
        });
    }
};