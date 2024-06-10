const db = require('./db');
module.exports = class Discount {
    constructor(){}
    static fetchAll(offset, limit) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT SQL_CALC_FOUND_ROWS * FROM discounts LIMIT ?, ?`;
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