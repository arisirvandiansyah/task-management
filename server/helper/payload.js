exports.storeUserPayload = (req) => {
  const payload = {
    firstName: req.first_name,
    lastName: req.last_name,
    position: req.position,
    email: req.email,
    password: req.password,
  };
  return payload;
};

exports.createTeamPayload = (id) => {
  const payload = {
    members: id,
  };
  return payload;
};
