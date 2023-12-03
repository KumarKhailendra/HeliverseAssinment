const mongoose = require("mongoose");

const teamSchema = mongoose.Schema(
    {
      teamname: {
        type: String,
        required: true,
        trim: true,
        unique: true
      },
      Description: {
        type: String,
        required: true,
      },
      members: [{ type: mongoose.Types.ObjectId, ref: 'users' }]
    },
    { timestaps: true }
  );

  const Teams = mongoose.model("teams", teamSchema);

module.exports = Teams;