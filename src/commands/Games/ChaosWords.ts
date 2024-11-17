import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

import { ExtendedClient } from "../..";

export default {
    data: new SlashCommandBuilder()
        .setName('chaoswords')
        .setDescription('ChaosWords Command'),
    async execute(interaction: ChatInputCommandInteraction, client: ExtendedClient) {
        if (!interaction.isChatInputCommand()) return;

        if (!interaction.channel || !interaction.guild || !interaction.member) return;

        return await client.WekyManager.createChaosWords({
            interaction: interaction,
            client: client,
            embed: {
                title: `ChaosWords | M3rcena Development`,
                color: 'Blurple',
            }
        });
    }
};