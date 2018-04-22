const jwt = require("jwt-simple");
const User = require("../models/user");
const config = require("../config");

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    const omitUser = { email: user.email };
    return jwt.encode(
        { user: omitUser, sub: user.id, iat: timestamp },
        config.secret
    );
}

exports.signin = function(req, res, next) {
    res.send({
        user: { email: req.user.email },
        token: tokenForUser(req.user)
    });
};

exports.signup = function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(422).send({ error: "Email and Password required" });
    }

    User.findOne({ email: email }, function(err, existingUser) {
        if (err) return next(err);

        if (existingUser) {
            return res.status(422).send({ error: "Email is in use" });
        }

        const user = new User({
            email,
            password
        });

        user.save(function(err) {
            if (err) return next(err);

            res.json({
                user: { email: user.email },
                sub: user.id,
                token: tokenForUser(user)
            });
        });
    });
};
