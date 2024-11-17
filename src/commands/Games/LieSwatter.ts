import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

import { ExtendedClient } from "../..";

export default {
    data: new SlashCommandBuilder()
        .setName('lieswatter')
        .setDescription('LieSwatter Command'),
    async execute(interaction: ChatInputCommandInteraction, client: ExtendedClient) {
        if (!interaction.isChatInputCommand()) return;

        if (!interaction.channel || !interaction.guild || !interaction.member) return;

        return await client.WekyManager.createLieSwatter({
            interaction: interaction,
            client: client,
            embed: {
                title: `LieSwatter | M3rcena Development`,
                color: 'Blurple',
            }
        });
    }
};