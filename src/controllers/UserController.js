const {User} = require("../models/User");
const Feature = require("../models/Feature");

async function getPermissions(req, res) {
    let permissions = null;

    const {authKey} = req.body;
    try {
        permissions = await User.findOne(
            {where: {id: authKey},
                attributes: ['id'],
                include: {model: Feature, attributes:[['name', "feature"]]},
        });
        if(permissions === null) {
            res.status(404).json({message: "Perminsions not found"});
        } else {
            res.status(200).json({message: "Permissions found", permissions: permissions});
        }
    } catch (error) {
        res.status(500).json({message: "Error finding permissions", error: error});
    }
}

async function logInUserPass(req, res) {
    let user = null;
    const {username, password} = req.body;
    try {
        user = await User.findOne(
            {where: {username: username, password: password},
            attributes: ['id']
        });
        if(user === null) {
            res.status(404).json({message: "User not found"});
            return user;
        } else {
            res.status(200).json({message: "User found", user: user});
        }
    } catch (error) {
        res.status(500).json({message: "Error finding user", error: error});
    }
    return user;
}

async function authUser(authKey) {
    return await User.findOne(
        {
            where: {id: authKey},
            attributes: ['id']
        });
}

async function logInAuth(req, res) {
    let user = null;
    const {authKey} = req.body;
    try {
        user = await authUser(authKey);
        if(user === null) {
            res.status(404).json({message: "User not found"});
        } else {
            res.status(200).json({message: "User found", user: user});
        }
    } catch (error) {
        res.status(500).json({message: "Error finding user", error: error});
    }
    return user;
}

module.exports = Object.freeze({logInUserPass: logInUserPass, logInAuth: logInAuth, getPermissions: getPermissions});