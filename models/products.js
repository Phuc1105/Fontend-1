const db = require('./db');
module.exports = class products {
    constructor(){}
    // static async fetchAll() {
    //     return new Promise((resolve,reject)=>{
    //         let sql = `SELECT * FROM products`;
    //         db.query(sql, function(err, data){
    //             if(err){
    //                 reject(err);
    //             }else{
    //                 resolve(data);
    //             }
    //         })
    //     })
    // }

    static fetchAll(offset, limit) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT SQL_CALC_FOUND_ROWS * FROM products LIMIT ?, ?`;
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
    static async fetchAllCategory() {
        return new Promise((resolve,reject)=>{
            let sql = `SELECT * FROM categories`;
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
            let sql = `SELECT * FROM products WHERE id = ?`;
            db.query(sql,[id],function(err, data){
                if(err){
                    reject(err);
                }else{
                    resolve(data);
                }
            })
        })
    }
    static async add(products) {
        return new Promise((resolve, reject) => {
            db.query(
            "INSERT INTO products SET ?",products,
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
            let sql = `DELETE FROM products WHERE id = ?`;
            db.query(sql, [id], function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
    static async update(id, products){
        return new Promise((resolve, reject) => {
            let sql = 'UPDATE products SET ? WHERE id = ?';
            db.query(sql, [products, id], function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
}