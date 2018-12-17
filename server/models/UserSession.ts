import * as mongoose from 'mongoose';

export const UserSessionSchema = new mongoose.Schema({
    userId: {
        type: Number,
        default: -1
    },
    timestamp: {
        type: Date,
        default: Date.now()
    },
    emaiisDeleted: {
        type: Boolean,
        default: false
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
