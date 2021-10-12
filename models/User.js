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
    story : {
        type: String,
    },
    status : {
        type: Boolean,
        default: true
    },
    avatar: {
        type: String,
    },
    ava_clond_id: {
        type: String,
        select: false
    },
    background: {
        type: String,
    },
    bg_clond_id: {
        type: String,
        select: false
    },
    isVerifi: {
        type: Boolean,
        default: false
    },
    interests: [{
        type: Schema.ObjectId, ref: 'interests' 
    }],
    friend: [{ 
        type: Schema.ObjectId, ref: 'users' 
    }]
},{
    versionKey: false,
    timestamps: true
});

module.exports = model("users",UsersSchema)