const db = require('./db');

module.exports = class Delivery {
    constructor(){}

    static async getAllDeliveries() {
        return new Promise((resolve,reject)=>{
            let sql = `SELECT * FROM deliveries`;
            db.query(sql, function(err, data){
                if(err){
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        })
    }

    static async getDeliveryById(deliveryId) {
        return new Promise((resolve,reject)=>{
            let sql = `SELECT * FROM deliveries WHERE id = ?`;
            db.query(sql, [deliveryId], function(err, data){
                if(err){
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        })
    }

    static async createDelivery(customer_name, customer_phone, milkTea_flavor, sugar, ice, toppings) {
        return new Promise((resolve, reject) => {
            db.query(
                "INSERT INTO deliveries (customer_name, customer_phone, milkTea_flavor, sugar, ice, toppings) VALUES (?, ?, ?, ?, ?, ?)",
                [customer_name, customer_phone, milkTea_flavor, sugar, ice, toppings],
                function (err, data) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data);
                    }
                }
            );
        });
    }

    static async deleteDelivery(deliveryId){
        return new Promise((resolve, reject) => {
            let sql = `DELETE FROM deliveries WHERE id = ?`;
            db.query(sql, [deliveryId], function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    static async updateDelivery(deliveryId, customer_name, customer_phone, milkTea_flavor, sugar, ice, toppings){
        return new Promise((resolve, reject) => {
            let sql = 'UPDATE deliveries SET customer_name = ?, customer_phone = ?, milkTea_flavor = ?, sugar = ?, ice = ?, toppings = ? WHERE id = ?';
            db.query(sql, [customer_name, customer_phone, milkTea_flavor, sugar, ice, toppings, deliveryId], function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    static async searchDeliveries(searchTerm){
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM deliveries WHERE customer_name LIKE ?';
            db.query(sql, [`%${searchTerm}%`], function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
}
