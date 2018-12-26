"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const constants_1 = require("./constants");
const bodyParser = __importStar(require("body-parser"));
const SignIn_1 = require("./routes/api.ts/SignIn");
const mongoose_1 = __importDefault(require("mongoose"));
class App {
    constructor() {
        this.route = new SignIn_1.SignUp();
        this.app = express_1.default();
        this.config();
        this.route.routes(this.app);
        this.mongoSetup();
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        mongoose_1.default.connect(constants_1.mongoUrl, { useNewUrlParser: true })
            .then(() => console.log("MongoDB connected"))
            .catch(err => console.log(err));
    }
}
exports.app = new App().app;
//# sourceMappingURL=app.js.map