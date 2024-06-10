const db = require('./db');
module.exports = class categories {
    constructor(){}
    static fetchAll(offset, limit) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT SQL_CALC_FOUND_ROWS * FROM categories LIMIT ?, ?`;
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
    static async fetchById(id) {
        return new Promise((resolve,reject)=>{
            let sql = `SELECT * FROM categories WHERE id = ?`;
            db.query(sql,[id],function(err, data){
                if(err){
                    reject(err);
                }else{
                    resolve(data);
                }
            })
        })
    }
    static async add(categories) {
        return new Promise((resolve, reject) => {
            db.query(
            "INSERT INTO categories SET ?",categories,
            function (err, data) {
              if (err) {
                reject(err);
              } else {
                resolve(data);
              }
            });
        });
      }
      static async delete(id){
        return new Promise((resolve, reject) => {
            let sql = `DELETE FROM categories WHERE id = ?`;
            db.query(sql, [id], function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
    static async update(id, categories){
        return new Promise((resolve, reject) => {
            let sql = 'UPDATE categories SET ? WHERE id = ?';
            db.query(sql, [categories, id], function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
}