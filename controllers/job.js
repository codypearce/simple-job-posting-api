const Job = require("../models/Job");

exports.index = function(req, res, next) {
    Job.find({}, (err, jobs) => {
        if (err) return res.send(err);

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

exports.read = function(req, res, next) {
    const id = req.params.id;

    Job.findById(id, (err, job) => {
        if (err) return res.send(err);

        return res.json(job);
    });
};
