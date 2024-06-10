const db = require('./db');
module.exports = class Discount {
    constructor(){}
    static async fetchAll() {
        return new Promise((resolve,reject)=>{
            let sql = `SELECT * FROM discounts`;
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
            let sql = `SELECT * FROM discounts WHERE id = ?`;
            db.query(sql,[id],function(err, data){
                if(err){
                    reject(err);
                }else{
                    resolve(data);
                }
            })
        })
    }

    static async add(discount) {
        return new Promise((resolve, reject) => {
            db.query(
            "INSERT INTO discounts SET ?",discount,
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
            let sql = `DELETE FROM discounts WHERE id = ?`;
            db.query(sql, [id], function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    static async update(id, discount){
        return new Promise((resolve, reject) => {
            let sql = 'UPDATE discounts SET ? WHERE id = ?';
            db.query(sql, [discount, id], function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
}