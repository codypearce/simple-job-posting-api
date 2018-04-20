# Simple Job Posting Api

Simple Node JWT auth server for [simple-job-posting-redux](https://github.com/codypearce/simple-job-posting-redux).

## Setup
1. Clone
2. `npm install`
3. Create `config.js` file at the root with a `secret`
```
module.exports = {
    secret: "secret"
};
```
4. `npm run dev`, server is now running on port:3000

## Tech
* Node.js
* Express.js
* Passport
* Passport-jwt
* Bcrypt
* Mongo with Mongoose
