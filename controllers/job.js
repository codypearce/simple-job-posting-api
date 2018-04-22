const Job = require("../models/Job");

exports.index = function(req, res, next) {
    Job.find({}, (err, jobs) => {
        if (err) return console.log(err);

        return res.json(jobs);
    });
};

exports.create = function(req, res, next) {
    const jobData = req.body;
    const job = new Job(jobData);

    job.save(function(err) {
        if (err) return next(err);

        res.json(job);
    });
};
