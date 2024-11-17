import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

import { ExtendedClient } from "../..";

export default {
    data: new SlashCommandBuilder()
        .setName('guessthenumber')
        .setDescription('GuessTheNumber Command'),
    async execute(interaction: ChatInputCommandInteraction, client: ExtendedClient) {
        if (!interaction.isChatInputCommand()) return;

        if (!interaction.channel || !interaction.guild || !interaction.member) return;

        return await client.WekyManager.createGuessTheNumber({
            interaction: interaction,
            client: client,
            embed: {
                title: `GuessTheNumber | M3rcena Development`,
                color: 'Blurple',
            }
        });
    }
};