const db = require('./db');
module.exports = class statistics {
    constructor(){}
    static async fetchAll() {
        return new Promise((resolve,reject)=>{
            let sql = `SELECT * FROM statistics`;
            db.query(sql, function(err, data){
                if(err){
                    reject(err);
                }else{
                    resolve(data);
                }
            })
        })
    }
}