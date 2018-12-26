// import { Request, Response, NextFunction } from 'express';
import { SignUpController } from '../../controllers/SignUp';
import * as express from "express";

export class SignUp {
    public signUpController: SignUpController = new SignUpController();
    public routes(app: express.Application): void {
        app.route('/account/signup')
            .post(this.signUpController.SignUp)
    }
}

// module.exports = app => {
//     app.post('/api/account/signup', (req: Request, res: Response, next: NextFunction) => {
//         const { body } = req;
//         const { 
//             firstName,
//             lastName,
//             email,
//             password
//         } = body;

//         if(!firstName) {
//             res.end({
//                 success: false,
//                 message: 'Error! First name cannot be blank'
//             })
//         }

//         if(!lastName) {
//             res.end({
//                 success: false,
//                 message: 'Error! Last name cannot be blank'
//             })
//         }

//         if(!email) {
//             res.end({
//                 success: false,
//                 message: 'Error! Email cannot be blank'
//             })
//         }

//         if(!password) {
//             res.end({
//                 success: false,
//                 message: 'Error! Password cannot be blank'
//             })
//         }
//     })
// }