var mongoose = require("mongoose");
mongoose.set("debug", true);

mongoose.connect(process.env.DB);

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");