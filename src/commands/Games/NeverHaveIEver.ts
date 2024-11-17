import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

import { ExtendedClient } from "../..";

export default {
    data: new SlashCommandBuilder()
        .setName('neverhaveiever')
        .setDescription('NeverHaveIEver Command'),
    async execute(interaction: ChatInputCommandInteraction, client: ExtendedClient) {
        if (!interaction.isChatInputCommand()) return;

        if (!interaction.channel || !interaction.guild || !interaction.member) return;

        return await client.WekyManager.createNeverHaveIEver({
            interaction: interaction,
            client: client,
            embed: {
                title: `NeverHaveIEver | M3rcena Development`,
                color: 'Blurple',
            }
        });
    }
};