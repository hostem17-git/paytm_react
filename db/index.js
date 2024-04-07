const mongoose = require("moongose");

mongoose.connect(Process.env.MONGODB_URL_DEV)


const userSchema = mongoose.Schema({
    UserName: {
        type: String,
        required: true,
        min: 6,
        max: 50,
        unique: true,
        trim: true,
        lowercase: true,
    },
    firstName: {
        type: String,
        required: true,
        min: 6,
        max: 50,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 6,
        max: 50,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 50,
    },
})


const User = mongoose.model("User", userSchema, "PaytmReact")


modules.exports = { User };