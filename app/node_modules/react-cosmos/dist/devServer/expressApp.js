import express from 'express';
import { getDevPlaygroundHtml } from '../shared/playgroundHtml.js';
import { getStaticPath } from '../shared/staticPath.js';
import { resolve } from '../utils/resolve.js';
export async function createExpressApp(platform, cosmosConfig, pluginConfigs) {
    const app = express();
    app.get('/', async (req, res) => {
        res.send(await getDevPlaygroundHtml(platform, cosmosConfig, pluginConfigs));
    });
    app.get('/playground.bundle.js', (req, res) => {
        res.sendFile(resolve('react-cosmos-ui/dist/playground.bundle.js'));
    });
    app.get('/playground.bundle.js.map', (req, res) => {
        res.sendFile(resolve('react-cosmos-ui/dist/playground.bundle.js.map'));
    });
    app.get('/_cosmos.ico', (req, res) => {
        res.sendFile(getStaticPath('favicon.ico'));
    });
    return app;
}
