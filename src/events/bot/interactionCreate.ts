import { ChatInputCommandInteraction, Events } from "discord.js";

import type { ExtendedClient } from "../..";

export default {
    name: Events.InteractionCreate,
    async execute(interaction: ChatInputCommandInteraction, client: ExtendedClient) {
        if (!interaction.isChatInputCommand()) return;

        const command = (interaction.client as ExtendedClient).commands.get(interaction.commandName);

        if (!command) {
            console.error(`No command found for ${interaction.commandName}`);
            return;
        };

        try {
            await command.execute(interaction, client);
        } catch (error) {
            console.error(`An error occurred while executing the command ${interaction.commandName}`);
            console.error(error);
            return;
        }
    }
}