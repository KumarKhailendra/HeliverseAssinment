const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        id: { 
            type: Number,
            required: true,
            trim: true
        },
        first_name: { 
            type: String,
            required: true,
            trim: true,
            maxlength: 25
        },
        last_name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 25
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        gender: { type: String, default: 'male' },
        avatar: {
            type: String,
            default: 'https://robohash.org/khailendra.png?size=50x50&set=set1'
        },
        domain: {
            type: String,
            required: true,
            trim: true
        },
        available: { 
            type: Boolean,
            required: true,
        }
    },
    { timestaps: true }
  );

  const UsersData = mongoose.model("users", userSchema);

module.exports = UsersData;