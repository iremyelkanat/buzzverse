import express, { Express } from 'express';

import { BuzzverseServer } from './setupServer';

class Application {
    public initialize(): void {
        const app: Express = express();
        const server: BuzzverseServer = new BuzzverseServer(app);
        server.start();
    }
}

const application: Application = new Application();
application.initialize();
