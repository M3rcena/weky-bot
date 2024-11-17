import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

import { ExtendedClient } from "../..";

export default {
    data: new SlashCommandBuilder()
        .setName('willyoupressthebutton')
        .setDescription('WillYouPressTheButton Command'),
    async execute(interaction: ChatInputCommandInteraction, client: ExtendedClient) {
        if (!interaction.isChatInputCommand()) return;

        if (!interaction.channel || !interaction.guild || !interaction.member) return;

        return await client.WekyManager.createWillYouPressTheButton({
            interaction: interaction,
            client: client,
            embed: {
                title: `WillYouPressTheButton | M3rcena Development`,
                color: 'Blurple',
            }
        });
    }
};