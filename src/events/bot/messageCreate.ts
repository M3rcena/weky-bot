import { EmbedBuilder, Events, Message } from "discord.js";

import { ExtendedClient } from "../..";

export default {
    name: Events.MessageCreate,
    async execute(message: Message, client: ExtendedClient) {
        if (message.author.bot) return;
        if (!message.content.startsWith('w!')) return;
        if (!message.guild) return;
        if (!message.channel.isSendable()) return;

        if (message.content === 'w!help') {
            const embed = new EmbedBuilder()
                .setTitle(`Help | M3rcena Development`)
                .setDescription(`Welcome <@${message.author.id}>!\n\nI'm M3rcena Development, a bot developed by <@682983233851228161> (d4rk.s0ul) and powered by <@1068868597398650971> (Mivator). I have a lot of games that you can play with your friends!\n\nHere is a list of games that you can play with me:`)
                .setFooter({
                    text: `©️ M3rcena Development | Powered by Mivator`,
                    iconURL: client.user.displayAvatarURL()
                })
                .setColor('Blurple')
                .addFields(
                    {
                        name: `🎮 Games`,
                        value: `- **2048**\n  - Run \`w!2048\` to play!\n- **Calculator**\n  - Run \`w!calculator\` to play!\n- **Chaos Words**\n  - Run \`w!chaoswords\` to play!\n- **Fast Type**\n  - Run \`w!fasttype\` to play!\n- **Guess The Number**\n  - Run \`w!guessthenumber\` to play!\n- **Hangman**\n  - Run \`w!hangman\` to play!\n- **Lie Swatter**\n  - Run \`w!lieswatter\` to play!\n- **Never Have I Ever**\n  - Run \`w!neverhaveiever\` to play!\n- **Quick Click**\n  - Run \`w!quickclick\` to play!\n- **Will You Press The Button**\n  - Run \`w!willyoupressthebutton\` to play!\n- **Would You Rather**\n  - Run \`w!wouldyourather\` to play!`
                    }
                );

            return await message.reply({
                embeds: [embed]
            });
        };

        if (message.content === `w!calculator`) {
            return await client.WekyManager.createCalculator({
                interaction: message,
                client: client,
                embed: {
                    title: `Calculator | M3rcena Development`,
                    color: 'Blurple',
                }
            });
        };

        if (message.content === `w!chaoswords`) {
            return await client.WekyManager.createChaosWords({
                interaction: message,
                client: client,
                embed: {
                    title: `Chaos Words | M3rcena Development`,
                    color: 'Blurple',
                }
            });
        };

        if (message.content === `w!fasttype`) {
            return await client.WekyManager.createFastType({
                interaction: message,
                client: client,
                embed: {
                    title: `Fast Type | M3rcena Development`,
                    color: 'Blurple',
                }
            });
        };

        if (message.content === `w!guessthenumber`) {
            return await client.WekyManager.createGuessTheNumber({
                interaction: message,
                client: client,
                embed: {
                    title: `Guess The Number | M3rcena Development`,
                    color: 'Blurple',
                }
            });
        };

        if (message.content === `w!hangman`) {
            return await client.WekyManager.createHangman({
                interaction: message,
                client: client,
                embed: {
                    title: `Hangman | M3rcena Development`,
                    color: 'Blurple',
                }
            });
        };

        if (message.content === `w!lieswatter`) {
            return await client.WekyManager.createLieSwatter({
                interaction: message,
                client: client,
                embed: {
                    title: `Lie Swatter | M3rcena Development`,
                    color: 'Blurple',
                }
            });
        };

        if (message.content === `w!neverhaveiever`) {
            return await client.WekyManager.createNeverHaveIEver({
                interaction: message,
                client: client,
                embed: {
                    title: `Never Have I Ever | M3rcena Development`,
                    color: 'Blurple',
                }
            });
        };

        if (message.content === `w!quickclick`) {
            return await client.WekyManager.createQuickClick({
                interaction: message,
                client: client,
                embed: {
                    title: `Quick Click | M3rcena Development`,
                    color: 'Blurple',
                }
            });
        };

        if (message.content === `w!willyoupressthebutton`) {
            return await client.WekyManager.createWillYouPressTheButton({
                interaction: message,
                client: client,
                embed: {
                    title: `Will You Press The Button | M3rcena Development`,
                    color: 'Blurple',
                }
            });
        };

        if (message.content === `w!wouldyourather`) {
            return await client.WekyManager.createWouldYouRather({
                interaction: message,
                client: client,
                embed: {
                    title: `Would You Rather | M3rcena Development`,
                    color: 'Blurple',
                }
            });
        };

        if (message.content === `w!2048`) {
            return await client.WekyManager.create2048({
                interaction: message,
                client: client,
                embed: {
                    title: `2048 | M3rcena Development`,
                    color: 'Blurple',
                }
            });
        };

        if (message.content === 'w!shuffle') {
            return await client.WekyManager.createShuffleGuess({
                interaction: message,
                client: client,
                embed: {
                    title: `ShuffleGuess | M3rcena Development`,
                    color: 'Blurple',
                }
            });
        }
    }
}