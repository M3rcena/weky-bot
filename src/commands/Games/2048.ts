import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

import { ExtendedClient } from "../..";

export default {
    data: new SlashCommandBuilder()
        .setName('2048')
        .setDescription('2048 Command'),
    async execute(interaction: ChatInputCommandInteraction, client: ExtendedClient) {
        if (!interaction.isChatInputCommand()) return;

        if (!interaction.channel || !interaction.guild || !interaction.member) return;

        return await client.WekyManager.create2048({
            interaction: interaction,
            client: client,
            embed: {
                title: `Calculator | M3rcena Development`,
                color: 'Blurple',
            }
        });
    }
};