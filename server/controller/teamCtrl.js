const asyncHandler = require("express-async-handler");
const UsersData = require("../models/usersModel");
const Teams = require("../models/teamModel");
const mongoose = require("mongoose");


const createTeam = asyncHandler(async (req, res) =>{
    try {
        const {teamname, Description, members} = req.body;

        const TeamName = await UsersData.findOne({teamname})
        if(TeamName) return res.status(400).json({msg: "This team name already exists."});

        let teamUserArr=[];
        let memberArr = []
        

        for(let i = 0; i < members.length; i++){
            let membersData = await UsersData.findById(members[i]);
            if(teamUserArr.length === 0){
                teamUserArr.push(membersData);
                memberArr.push(membersData._id)
                continue;
            }

            for(let j = 0; j < teamUserArr.length; j++){
                if(teamUserArr[j].domain === membersData.domain){
                    return res.status(400).json({msg: "Members are accept Only Unique domain"});
                }
            }
            if(membersData.available === false){
                continue;
            }
            memberArr.push(membersData._id)
            teamUserArr.push(membersData);
        }

        const newTeam = new Teams({teamname, Description, members: memberArr});

        await newTeam.save();

        res.json({
            msg: members.length === memberArr.length? "ok":"Members who are marked as unavailable cannot be added to this list as the inclusion of unavailable users is not permitted.",
            newTeam
        })
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
});

const getTeams = asyncHandler(async (req, res) => {
    try {
        const limit = 10
        const page = req.query.page || 1;
        const skip = (page - 1)*limit;
        const data = await Teams.find().skip(skip).limit(limit);
        const totalDatas = await Teams.find().countDocuments();
        res.json({
            TotalPages: Math.ceil(totalDatas/limit),
            data
        })
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
})

const getTeam = asyncHandler(async (req, res) => {
    try {
        let data = await Teams.aggregate([
            {
                $match: {
                  _id: new mongoose.Types.ObjectId(req.params.id)
                }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "members",
                    foreignField: "_id",
                    as: "membersData",
                }
            },
            {
                $project:
                  {
                    _id: 1,
                    teamname: 1,
                    Description: 1,
                    membersData: 1,
                  },
              },
        ]);

        res.json({
            data
        })
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
})


module.exports = { createTeam, getTeams, getTeam };