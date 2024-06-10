const discounts = require('../../models/discount');

exports.get = async (req, res, next) => {
    try {
        const discountList = await discounts.fetchAll();
        res.status(200).json({ data: discountList });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getById = async (req, res, next) =>{
    try{
        let id = req.params.id;
        const discount = await discounts.fetchById(id)
        res.status(201).json({
            data: discount,
        })
    }catch(error){
        res.status(500).json({ error: error.message})
    }
};
exports.delete = async (req, res, next) => {
    let id = req.params.id;

    let result = await discounts.delete(id);

    console.log(result);
    res.status(201).json({
        result: result
    })
};