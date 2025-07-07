import { handler } from '@lilybird/handlers/advanced';
import { createClient, Intents } from 'lilybird';

process.on('unhandledRejection', console.error);
process.on('uncaughtException', console.error);

handler.cachePath = `${import.meta.dir}/lily-cache/handler`;
await handler.scanDir(`${import.meta.dir}/commands`);
await handler.scanDir(`${import.meta.dir}/events`);

export const client = await createClient({
    token: process.env.TOKEN,
    intents: [
        Intents.GUILDS,
        Intents.GUILD_MESSAGES,
        Intents.MESSAGE_CONTENT,
        Intents.GUILD_MEMBERS,
    ],
    attachDebugListener: true,
    listeners: handler.getListenersObject(),
    setup: async (c) => {
        await handler.loadGlobalCommands(c);
    },
});
