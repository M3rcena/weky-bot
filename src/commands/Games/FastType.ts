import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

import { ExtendedClient } from "../..";

export default {
    data: new SlashCommandBuilder()
        .setName('fasttype')
        .setDescription('FastType Command'),
    async execute(interaction: ChatInputCommandInteraction, client: ExtendedClient) {
        if (!interaction.isChatInputCommand()) return;

        if (!interaction.channel || !interaction.guild || !interaction.member) return;

        return await client.WekyManager.createFastType({
            interaction: interaction,
            client: client,
            embed: {
                title: `FastType | M3rcena Development`,
                color: 'Blurple',
            }
        });
    }
};