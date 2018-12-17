import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

export const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        default: ''
    },
    secondName: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    isDeleted: {
        type: Boolean,
        default: false
    }    
})

UserSchema.methods.generateHash =  (password: string): string => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

UserSchema.methods.validPassword =  function (password: string): boolean {
    return bcrypt.compareSync(password, this.password)
}