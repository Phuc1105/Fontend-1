const  inventories = require('../../models/inventories');
const path = require('path');


exports.getInventories = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 6;
        const offset = (page - 1) * limit;
        const { data, total } = await inventories.fetchAll(offset, limit);
        const totalPages = Math.ceil(total / limit);
        const from = offset + 1;
        const to = offset + data.length;

        res.status(200).json({
            data: data,
            meta: {
                current_page: page,
                from: from,
                last_page: totalPages,
                path: req.baseUrl,
                per_page: limit,
                to: to,
                total: total
            },
            links: {
                first: `${req.baseUrl}/inventories?page=1&limit=${limit}`,
                last: `${req.baseUrl}/inventories?page=${totalPages}&limit=${limit}`,
                prev: page > 1 ? `${req.baseUrl}/inventories?page=${page - 1}&limit=${limit}` : null,
                next: page < totalPages ? `${req.baseUrl}/inventories?page=${page + 1}&limit=${limit}` : null
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.detail = async (req, res, next) =>{
    try{
        let id = req.params.id;
        const inventorie = await inventories.fetchById(id);
        res.status(201).json({
            data: inventorie,
        })
    }catch(error){
        res.status(500).json({ error: error.message})
    }
};
exports.add = async (req, res, next) => {
    try {
        let inventory = {
            name: req.body.name,
            description: req.body.description,
            status: req.body.status,
            role: req.body.role,
        };
        const add = await inventories.add(inventory);
        res.status(200).json({
            data: add,
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            error: 'Internal Server Error',
        });
    }
};
exports.delete = async (req, res, next) => {
    let id = req.params.id;

    let result = await inventories.delete(id);

    console.log(result);
    res.status(201).json({
        result: result
    })
};
exports.update = async (req, res, next) => {
    try {
        let id = req.params.id;
        let updatedInventory = {
           name: req.body.name,
           description: req.body.description,
           status: req.body.status,
           role: req.body.role,
        };

        const editInventories = await inventories.update(id, updatedInventory);
        res.status(200).json({
            data: editInventories,
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};
