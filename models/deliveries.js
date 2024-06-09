const db = require('./db');

module.exports = class Deliveries {
    constructor() {}

    static async fetchAll() {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT * FROM deliveries';
            db.query(sql, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
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
