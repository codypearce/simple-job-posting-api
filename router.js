const Auth = require("./controllers/auth");
const passportService = require("./services/passport");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", { session: false });

module.exports = function(app) {
    app.get("/", requireAuth, (req, res) => res.send("Authorized"));
    app.post("/signup", Auth.signup);
};
