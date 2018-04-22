const Job = require("../models/Job");

exports.index = function(req, res, next) {
    Job.find({}, (err, jobs) => {
        if (err) return console.log(err);

        return res.json(jobs);
    });
};
