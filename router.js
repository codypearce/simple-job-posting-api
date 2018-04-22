const Auth = require("./controllers/auth");
const Job = require("./controllers/job");

const passportService = require("./services/passport");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

module.exports = function(app) {
    app.get("/", requireAuth, (req, res) =>
        res.json({ message: "Authorized" })
    );
    app.post("/signup", Auth.signup);
    app.post("/signin", requireSignin, Auth.signin);

    app.get("/jobs", Job.index);
    app.post("/jobs", Job.create);
};
