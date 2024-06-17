const db = require('./db');
module.exports = class inventories {
    constructor(){}
    static fetchAll(offset, limit) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT SQL_CALC_FOUND_ROWS * FROM inventories LIMIT ?, ?`;
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
            let sql = `SELECT * FROM inventories WHERE id = ?`;
            db.query(sql,[id],function(err, data){
                if(err){
                    reject(err);
                }else{
                    resolve(data);
                }
            })
        })
    }
    static async add(inventories) {
        return new Promise((resolve, reject) => {
            db.query(
            "INSERT INTO inventories SET ?",inventories,
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
            let sql = `DELETE FROM inventories WHERE id = ?`;
            db.query(sql, [id], function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
    static async update(id, inventories){
        return new Promise((resolve, reject) => {
            let sql = 'UPDATE inventories SET ? WHERE id = ?';
            db.query(sql, [inventories, id], function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
}