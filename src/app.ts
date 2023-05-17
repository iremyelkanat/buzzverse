import { JoiRequestValidationError } from './shared/globals/helpers/errorHandler';
import express, { Express } from 'express';

import { BuzzverseServer } from './setupServer';
import connectDatabase from './setupDatabase';
import { config } from './config';

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
