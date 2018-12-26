"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Request, Response, NextFunction } from 'express';
const SignUp_1 = require("../../controllers/SignUp");
class SignUp {
    constructor() {
        this.signUpController = new SignUp_1.SignUpController();
    }
    routes(app) {
        app.route('/account/signup')
            .post(this.signUpController.SignUp);
    }
}
exports.SignUp = SignUp;
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
//# sourceMappingURL=SignIn.js.map