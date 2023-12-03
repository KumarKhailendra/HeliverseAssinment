const asyncHandler = require("express-async-handler");
const UsersData = require("../models/usersModel");


const createUser = asyncHandler(async (req, res) =>{
    try {
        const {first_name, last_name, email, gender, avatar, domain, available} = req.body;

        const user_email = await UsersData.findOne({email})
        if(user_email) return res.status(400).json({msg: "This email already exists."});

        const dataLength = await UsersData.countDocuments();
        const userDatas = await UsersData.find();
        const id = parseInt(userDatas[dataLength-1].id) + 1;

        const newUser = new UsersData({id, first_name, last_name, email, gender, avatar, domain, available});

        await newUser.save();

        res.json({
            msg: 'User create Success!',
            user: {
                ...newUser._doc
            }
        })
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
});

const getUsers = asyncHandler(async (req, res) => {
    try {
        const { page, limit, name, gender, domain, available } = req.query;
        
        
        let search = name?{
            $or:[
                {first_name:{ $regex: name,     $options: "i" } },
                {last_name:{ $regex: name,     $options: "i" } }
            ] 
        }:{}

        search = gender?{...search, gender}: search;
        search = domain?{...search, domain}: search;
        search = available?{...search, available}: search;

        let totalDomen = await UsersData.find();
        totalDomen = unicfield(totalDomen, "domain")
        // Pagination
        const totalDatas = await UsersData.find(search).countDocuments();
        const limitData = limit || totalDatas;
        const pages = page || 1;
        const skip = (pages - 1)*limitData;

        let data = await UsersData.find(search).skip(skip).limit(limitData);

        res.json({
            totalDomain: totalDomen,
            TotalPages: Math.ceil(totalDatas/limitData),
            data
        })
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
});

const getUser = asyncHandler(async (req, res) => {
    try {
        const user = await UsersData.findOne({id: parseInt(req.params.id)})
        if(!user) return res.status(400).json({msg: "User does not exist."})
            
        res.json({user})
    } catch (err) {
        return res.status(500).json({msg: err.message})   
    }
});

const updateUser = asyncHandler(async (req, res) => {
    try {
        const {first_name, last_name, email, gender, avatar, domain, available} = req.body;

        await UsersData.findOneAndUpdate({id: parseInt(req.params.id)}, {first_name, last_name, email, gender, avatar, domain, available});

        res.json({msg: "Update Success!"})
    } catch (err) {
        return res.status(500).json({msg: err.message}) 
    }
});

const deleteUser = asyncHandler(async (req, res) => {
    try {

        const post = await UsersData.findOneAndDelete({id: parseInt(req.params.id)});

        res.json({
            msg: 'Deleted Post!',
            newPost: {
                ...post,
            }
        })
    } catch (err) {
        return res.status(500).json({msg: err.message}) 
    }
});

const unicfield = (data, pv) => {
    let arr = []
    data.map((d)=>{
      const arrHasValue= arr.some((i) => {
        return d[pv] === i})
      if(arrHasValue){
        arr = [...arr]
      }else{
        d[pv]? arr = [...arr, d[pv]]: arr = [...arr]
      }
    })
    arr = arr.sort((a, b) => a - b)
    return arr;
}
module.exports = { createUser, getUsers, getUser, updateUser, deleteUser };