const {Schema, model} = require("mongoose");

const UsersSchema = new Schema({
    fullname :{
        type: String, 
        trim: true,
        required: true,
        minlength: 6, 
        maxlength: 30,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6, 
        select: false
    },
    mobile: {
        type: Number,
        trim: true,
    },
    email : {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    adress : {
        type: String,
    },
    status : {
        type: Boolean,
        default: true
    },
    avatar: {
        type: String,
    },
    isVerifi: {
        type: Boolean,
        default: false
    }
},{
    versionKey: false,
    timestamps: true
});

module.exports = model("users",UsersSchema)