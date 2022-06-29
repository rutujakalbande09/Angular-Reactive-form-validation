var express = require('express');
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Firstname: { type: String, required: true },
    Lastname: { type: String, required: true },
    emailId: { type: String, required: true },
    Mobilenumber: { type: Number, required: true },
    address: { type: String, required: true },
});
module.exports = mongoose.model("tbl_user_basic_data", userSchema);