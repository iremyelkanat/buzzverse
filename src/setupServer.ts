import {Application, json, urlencoded, Response, Request, NextFunction} from 'express';
import http from 'http';
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';
import cookieSession from 'cookie-session';
import HTTP_STATUS from 'http-status-codes';
import 'express-async-errors';

export class BuzzverseServer {
    private app: Application;

    constructor(app: Application) {
        this.app = app;
    }

    public start(): void {
        this.securityMiddleware(this.app);
        this.standardMiddleware(this.app);
        this.routesMiddleware(this.app);
        this.globalErrorMiddleware(this.app);
        this.startServer(this.app);
    }

    private securityMiddleware(app: Application): void {
        app.use(
            cookieSession({
                name: 'session',
                keys: ['test1', 'test2'],
                maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
                secure: false
            })
        );
        app.use(hpp());
        app.use(helmet());
        app.use(
            cors({
                origin: '*',
                credentials: true,
                optionsSuccessStatus: 200,
                methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
            })
        );
    }

    private standardMiddleware(app: Application): void {}

    private routesMiddleware(app: Application): void {}

    private globalErrorMiddleware(app: Application): void {}

    private startServer(app: Application): void {}

    private createSocketIO(httpServer: http.Server): void {}

    private startHttpServer(httpServer: http.Server): void {}
}