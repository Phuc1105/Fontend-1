const connection = require('../models/database');

module.exports = class Users {
    constructor() { }

    static async fetchAllUsers() {
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM users`;
            connection.query(sql, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        })
    }

    static async getAllUsers() {
        try {
            const users = await this.fetchAllUsers();
            return users;
        } catch (error) {
            throw (error);
        }
    }

    static async addUsers(userData) {
        return new Promise((resolve, reject) => {
            connection.query(
                "INSERT INTO users SET ?", userData,
                function (err, data) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data);
                    }
                });
        });
    }

    static async getUserById(userId) {
        return new Promise((resolve, reject) => {
            connection.query(
                "SELECT * FROM users WHERE id = ?", userId,
                function (err, data) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data[0]);
                    }
                });
        });
    }

    static async updateUsers(userId, newUserData) {
        return new Promise((resolve, reject) => {
            connection.query(
                "UPDATE users SET ? WHERE id = ?", [newUserData, userId],
                function (err, data) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data);
                    }
                });
        });
    }

    static async deleteUsers(userId) {
        return new Promise((resolve, reject) => {
            connection.query(
                "DELETE FROM users WHERE id = ?", userId,
                function (err, data) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data);
                    }
                });
        });
    } 

    
}
