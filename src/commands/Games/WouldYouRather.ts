import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

import { ExtendedClient } from "../..";

export default {
    data: new SlashCommandBuilder()
        .setName('wouldyourather')
        .setDescription('WouldYouRather Command'),
    async execute(interaction: ChatInputCommandInteraction, client: ExtendedClient) {
        if (!interaction.isChatInputCommand()) return;

        if (!interaction.channel || !interaction.guild || !interaction.member) return;

        return await client.WekyManager.createWouldYouRather({
            interaction: interaction,
            client: client,
            embed: {
                title: `WouldYouRather | M3rcena Development`,
                color: 'Blurple',
            }
        });
    }
};