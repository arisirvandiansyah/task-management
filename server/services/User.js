const User = require("../models/User");

exports.checkExistingEmail = async (email) => {
  const user = await User.findOne({ email });
  if (user) {
    return true;
  }
  return false;
};
exports.storeUser = async (payload, res) => {
  const user = new User(payload);
  await user.save();
  return user;
};
