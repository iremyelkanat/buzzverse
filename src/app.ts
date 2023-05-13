import express, { Express } from 'express';

import { BuzzverseServer } from './setupServer';
import connectDatabase from './setupDatabase';

class Application {
    public initialize(): void {
        connectDatabase();
        const app: Express = express();
        const server: BuzzverseServer = new BuzzverseServer(app);
        server.start();
    }
}

const application: Application = new Application();
application.initialize();
