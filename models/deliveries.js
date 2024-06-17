const db = require('./db');

module.exports = class Deliveries {
    constructor() {}
    static fetchAll(offset, limit) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT SQL_CALC_FOUND_ROWS * FROM deliveries LIMIT ?, ?`;
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
    static async fetchById(deliveryId) {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT * FROM deliveries WHERE id = ?';
            db.query(sql, [deliveryId], function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    static async add(delivery) {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO deliveries SET ?', delivery, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    static async delete(deliveryId) {
        return new Promise((resolve, reject) => {
            let sql = 'DELETE FROM deliveries WHERE id = ?';
            db.query(sql, [deliveryId], function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    static async update(deliveryId, delivery) {
        return new Promise((resolve, reject) => {
            let sql = 'UPDATE deliveries SET ? WHERE id = ?';
            db.query(sql, [delivery, deliveryId], function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
    
};
