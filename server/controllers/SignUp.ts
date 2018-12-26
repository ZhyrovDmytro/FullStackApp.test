import * as mongoose from 'mongoose';
import { UserSchema } from '../models/User';
import { Request, Response } from 'express';

const User = mongoose.model('User', UserSchema);

export class SignUpController {
    public SignUp(req: Request, res: Response) {
        const newUser = new User(req.body);

        newUser.save((err, user) => {
            err && res.send(err);
            
            console.log(user)
            res.json(user)
        })
    }
}