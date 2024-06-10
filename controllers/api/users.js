const users = require('../../models/user');
const argon2 = require('argon2');

exports.getUsers = async (req, res, next) => {
    try {
        const userList = await users.fetchAll();
        res.status(200).json({ data: userList });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.create = async (req, res, next) => {
    try {
        let username = req.body.username;
        let password = req.body.password;
        let email = req.body.email;
        let phone = req.body.phone;
        let role = req.body.role;
        let status = req.body.status;
        let hashedPassword = await argon2.hash(password);
        let user = {
            username: username,
            password: hashedPassword,
            phone: phone,
            email: email,
            role: role,
            status: status,
        };
        let data = await users.add(user);
        console.log(user);
        console.log(data);
        res.status(201).json({
            status: 1,
            data: data,
            message: 'Tài khoản đã được tạo thành công',
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.update = async (req, res, next) => {
    try {
        const user_id = req.params.id;
        let username = req.body.username;
        let password = req.body.password;
        let email = req.body.email;
        let phone = req.body.phone;
        let role = req.body.role;
        let status = req.body.status;
        let hashedPassword = await argon2.hash(password);

        const user = {
            username: username,
            password: hashedPassword,
            phone: phone,
            email: email,
            role: role,
            status: status,
        };
        await users.update(user_id, user);
        res.status(200).json({ message: 'Tài khoản đã được cập nhật thành công' });
    } catch (error) {
        console.error("Lỗi khi cập nhật tài khoản:", error);
        res.status(500).json({ error: 'Lỗi Máy Chủ Nội Bộ' });
    }
};
exports.edit = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const user = await users.fetchById(userId);
        res.status(200).json({ data: user });
    } catch (error) {
        console.error('Lỗi khi lấy dữ liệu tài khoản:', error);
        res.status(500).json({ error: 'Lỗi Máy Chủ Nội Bộ' });
    }
}
exports.delete = async (req, res, next) => {
    try {
        const user_id = req.params.id;
        const data = await users.delete(user_id);
        res.status(200).json({ data: data,  message: 'Xóa thành công!!!' })
    }
    catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            error: 'Lỗi khi xóa'
        });
    }
}