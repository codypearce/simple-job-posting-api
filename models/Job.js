const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    title: String,
    company: String,
    location: String,
    descript: String,
    tags: Array
});

const ModelClass = mongoose.model("job", userSchema);

module.exports = ModelClass;
