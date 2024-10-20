const Team = require("../models/Team");

exports.createTeam = async (payload) => {
  const team = new Team(payload);
  await team.save();
  return team;
};
