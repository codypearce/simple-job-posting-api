const jobs = require("./jobs");
const Job = require("../models/Job");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/simple-job-posting-api");

function populatedb() {
    Job.create([...jobs], function(err, job) {
        if (err) throw err;
        return job;
    });
    return;
}

populatedb();

module.exports = { populatedb };
