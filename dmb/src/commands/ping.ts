import { $applicationCommand } from '@lilybird/handlers/advanced';
import { InteractionCallbackType } from 'lilybird';

$applicationCommand({
    name: 'ping',
    description: 'pong',
    handle: async (client, interaction) => {
        const { ws, rest } = await client.ping();
        await client.rest.createInteractionResponse(
            interaction.id,
            interaction.token,
            {
                type: InteractionCallbackType.CHANNEL_MESSAGE_WITH_SOURCE,
                data: {
                    content: `🏓 WebSocket: \`${ws}ms\` | Rest: \`${rest}ms\``,
                },
            }
        );
    },
});
