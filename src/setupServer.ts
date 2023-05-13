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

    private securityMiddleware(app: Application): void {}

    private standardMiddleware(app: Application): void {}

    private routesMiddleware(app: Application): void {}

    private globalErrorMiddleware(app: Application): void {}

    private startServer(app: Application): void {}

    private createSocketIO(httpServer: http.Server): void {}

    private startHttpServer(httpServer: http.Server): void {}
}