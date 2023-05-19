import express, { Express } from 'express';

import { BuzzverseServer } from '@root/setupServer';
import connectDatabase from '@root/setupDatabase';
import { config } from '@root/config';

class Application {
    public initialize(): void {
        this.loadConfig();
        connectDatabase();
        const app: Express = express();
        const server: BuzzverseServer = new BuzzverseServer(app);
        server.start();
    }

    private loadConfig(): void {
        config.validateConfig();
    }
}

const application: Application = new Application();
application.initialize();
