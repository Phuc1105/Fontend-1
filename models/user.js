const db = require('./db');
module.exports = class User {
    constructor() { }
    static fetchAll(offset, limit) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT SQL_CALC_FOUND_ROWS * FROM users LIMIT ?, ?`;
            db.query(sql, [offset, limit], (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    db.query('SELECT FOUND_ROWS() as total', (err, result) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve({
                                data: data,
                                total: result[0].total
                            });
                        }
                    });
                }
            });
        });
    }
    static async fetchById(userId) {
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM users WHERE id = ?`;
            db.query(sql, [userId], function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        })
    }

    static async add(user) {
        return new Promise((resolve, reject) => {
            db.query(
            "INSERT INTO users SET ?",user,
            function (err, data) {
              if (err) {
                reject(err);
              } else {
                resolve(data);
              }
            });
        });
      }

      static async delete(userId){
        return new Promise((resolve, reject) => {
            let sql = `DELETE FROM users WHERE id = ?`;
            db.query(sql, [userId], function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    static async update(userId, user){
        return new Promise((resolve, reject) => {
            let sql = 'UPDATE users SET ? WHERE id = ?';
            db.query(sql, [user, userId], function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
    static async login(username){
        return new Promise((resolve, reject)=>{
            let sql =`SELECT * FROM users WHERE username='${username}'`;
            db.query(sql,function(err, data){
                if(err){
                    reject(err);
                }else{
                    resolve(data);
                }
            })
        })
    }
}