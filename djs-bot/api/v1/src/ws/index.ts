import { WSApp } from '../interfaces/common';
import { wsLog } from '../utils/log';
import { createWsRoute } from '../utils/ws';
import { getPkg } from '../';

export function setupWsServer(wsServer: WSApp) {
  /* upgrade, open, message, ping, pong, close */

  wsServer
    .ws(createWsRoute('/echo'), {
      idleTimeout: 32,
      // upgrade: (res, req, ctx) => {},
      // ping: (ws, message) => {},
      // pong: (ws, message) => {},

      open: (ws) => {
        wsLog('log', 'echo: Connected:', ws.getRemoteAddressAsText.toString());
      },
      message: (ws, message, isBinary) => {
        wsLog('log', 'echo: Message:', ws.getRemoteAddressAsText.toString());

        let ok = ws.send(message, isBinary);

        wsLog('log', 'echo: Status:', ok);
      },
      close: (ws, code, message) => {
        wsLog('log', 'echo: Close:', ws.getRemoteAddressAsText.toString());
        wsLog('log', 'echo: Message:', message.toString());
        wsLog('log', 'echo: Code:', code);
      },
    })
    .ws(createWsRoute('/player/:serverId'), {
      idleTimeout: 32,
      open: (ws) => {},
      message: (ws, message, isBinary) => {},
      close: (ws, code, message) => {},
    })
    .get(createWsRoute('/'), (res, req) => {
      res
        .writeStatus('200 OK')
        .writeHeader('Content-Type', 'application/json')
        .end(
          JSON.stringify({
            message: 'WebSocket server is up and running!',
            version: getPkg().version,
          }),
        );
    });
}