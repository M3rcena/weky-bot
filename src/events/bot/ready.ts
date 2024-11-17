import { ActivityType, Events } from "discord.js";

import { WekyManager } from "@m3rcena/weky";

import type { ExtendedClient } from "../..";
export default {
    name: Events.ClientReady,
    once: true,
    async execute(client: ExtendedClient) {
        console.log(`Logged in as ${client.user.tag}`);

        client.user.setPresence({
            activities: [{
                name: `w!help | ${client.guilds.cache.size} servers`,
                type: ActivityType.Custom
            }],
            status: "online"
        });

        client.WekyManager = new WekyManager(client);
    }
}