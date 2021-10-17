const {Schema, model} = require("mongoose");

const InterestSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true,
        trim: true
    },
},{
    versionKey: false,
    timestamps: true
});

module.exports = model("interests",InterestSchema)