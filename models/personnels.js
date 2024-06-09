const db = require('./db');
module.exports = class User {
    constructor(){}
    static async fetchAll() {
        return new Promise((resolve,reject)=>{
            let sql = `SELECT * FROM personnel`;
            db.query(sql, function(err, data){
                if(err){
                    reject(err);
                }else{
                    resolve(data);
                }
            })
        })
    }
    static async fetchById(id) {
        return new Promise((resolve,reject)=>{
            let sql = `SELECT * FROM personnel WHERE id = ?`;
            db.query(sql,[id],function(err, data){
                if(err){
                    reject(err);
                }else{
                    resolve(data);
                }
            })
        })
    }
    static async add(personnel) {
        return new Promise((resolve, reject) => {
            db.query(
            "INSERT INTO personnel SET ?",personnel,
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
            let sql = `DELETE FROM personnel WHERE id = ?`;
            db.query(sql, [id], function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
    static async update(id, personnel){
        return new Promise((resolve, reject) => {
            let sql = 'UPDATE personnel SET ? WHERE id = ?';
            db.query(sql, [personnel, id], function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
}