const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    title: String,
    company: String,
    location: String,
    salary: String,
    description: String,
    tags: Array
});

const ModelClass = mongoose.model("job", jobSchema);

module.exports = ModelClass;
