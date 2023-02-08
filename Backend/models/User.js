const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        createAt: Date
    },
    {timestamps: true} //by mongoose its used to create automatically createdAt, updatedAt 
)

module.exports = mongoose.model("User", UserSchema) //now we can use this schema inside our router