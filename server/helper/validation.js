const validator = require("validator");

exports.requestValidation = (req) => {
  const errors = {};
  if (req.email !== undefined && !validator.isEmail(req.email)) {
    errors.email = "Email is invalid";
  }
  if (req.password !== undefined) {
    if (validator.isEmpty(req.password))
      errors.password = "Password is required";
    if (!validator.isLength(req.password, { min: 6, max: 16 }))
      errors.password = "Password must be between 6 and 16 characters";
  }
  if (req.first_name !== undefined && validator.isEmpty(req.first_name)) {
    errors.first_name = "First name is required";
  }
  if (req.last_name !== undefined && validator.isEmpty(req.last_name)) {
    errors.last_name = "Last name is required";
  }
  if (req.position !== undefined && validator.isEmpty(req.position)) {
    errors.position = "Position is required";
  }
  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
