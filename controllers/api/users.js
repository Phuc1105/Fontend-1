const  users = require('../../models/user');

exports.getUsers = async (req, res, next) => {
    try {
        const userList = await users.fetchAll();
        res.status(200).json({ data: userList });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
