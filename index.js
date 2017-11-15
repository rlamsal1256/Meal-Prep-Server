const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./models/User");

const User = mongoose.model("users");
require("./services/passport");

// Connect to the db
mongoose.connect(keys.mongoURI);
// mongoose.connect("mongodb://localhost:27017/userDb", function(err, db) {
//   if (!err) {
//     console.log("We are connected");
//     User.findOne({ googleID: "1234" }).then(existingUser => {
//       if (existingUser) {
//         //we already have a record
//         console.log("existing user");
//       } else {
//         // we dont have id, make a new record
//         console.log("creating new user");
//         new User({ googleID: "1234" }).save();
//       }
//     });
//   }
// });

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
