import express from "express";
import { mongoUrl } from './constants';
import * as bodyParser from "body-parser";
import { SignUp } from './routes/api.ts/SignIn';
import mongoose from 'mongoose';

class App {

    public app: express.Application;
    public route: SignUp = new SignUp();

    constructor() {
        this.app = express();
        this.config();
        this.route.routes(this.app);
        this.mongoSetup();  
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void {
        mongoose.connect(mongoUrl, { useNewUrlParser: true })
        .then(() => console.log("MongoDB connected"))
        .catch(err => console.log(err));
    }

}

export const app = new App().app;