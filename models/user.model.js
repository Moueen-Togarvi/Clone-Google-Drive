const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minlength: [3, 'Username must be at least 3 characters long'],


    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minlength: [13, 'Email must be at least 5 characters long'],
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        },

        password: {
            trim: true,
            type: String,
            required: true,
            minlength: [5, 'Password must be at least 5 characters long'],
        },  
    },
})

const User = mongoose.model('user', userSchema);
module.exports = user;