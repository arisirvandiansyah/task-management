const { storeUserPayload, createTeamPayload } = require("../helper/payload");
const { requestValidation } = require("../helper/validation");
const { createTeam } = require("../services/Team");
const { storeUser, checkExistingEmail } = require("../services/User");

exports.register = async (req, res) => {
  const payload = storeUserPayload(req.body);
  const validation = requestValidation(req.body);
  if (!validation.isValid) {
    return res.status(400).send(validation.errors);
  }
  try {
    if (await checkExistingEmail(req.body.email)) {
      return res
        .status(409)
        .send({ message: "Email has been taken, try another email" });
    }
    const user = await storeUser(payload);
    const teamPayload = createTeamPayload(user._id);
    await createTeam(teamPayload);
    return res.status(201).send({ message: "Register successfully" });
  } catch (err) {
    return res.sendStatus(500);
  }
};
