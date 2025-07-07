import { $listener } from '@lilybird/handlers/advanced';

$listener({
    event: 'ready',
    handle: (client) => {
        console.log(`Logged in as ${client.user.username} (${client.user.id})`);
    },
});
