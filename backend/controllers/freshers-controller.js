const httpError = require("./../models/http-error");
const Fresher = require("./../models/fresher");

exports.getFreshers = (req, res) => {
  res.send("All Freshers Data");
};

exports.login = (req, res) => {
  res.send("Logged In");
};

exports.addFresher = async (req, res, next) => {
  const body = req.body;
  const newFresher = new Fresher(body);
  try {
    await newFresher.save();
  } catch (err) {
    return next(new httpError("Something went wrong !", 500));
  }
  res.status(201).json({ user: newFresher.toObject({ getters: true }) });
};
