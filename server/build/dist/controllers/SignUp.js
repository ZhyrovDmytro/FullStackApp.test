"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
const User_1 = require("../models/User");
const User = mongoose.model('User', User_1.UserSchema);
class SignUpController {
    SignUp(req, res) {
        const newUser = new User(req.body);
        newUser.save((err, user) => {
            err && res.send(err);
            console.log(user);
            res.json(user);
        });
    }
}
exports.SignUpController = SignUpController;
//# sourceMappingURL=SignUp.js.map