const  categories = require('../../models/categories');
const path = require('path');


exports.getCategories = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 6;
        const offset = (page - 1) * limit;
        const { data, total } = await categories.fetchAll(offset, limit);
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
                first: `${req.baseUrl}/categories?page=1&limit=${limit}`,
                last: `${req.baseUrl}/categories?page=${totalPages}&limit=${limit}`,
                prev: page > 1 ? `${req.baseUrl}/categories?page=${page - 1}&limit=${limit}` : null,
                next: page < totalPages ? `${req.baseUrl}/categories?page=${page + 1}&limit=${limit}` : null
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.detail = async (req, res, next) =>{
    try{
        let id = req.params.id;
        const categories = await categories.fetchById(id);
        res.status(201).json({
            data: categories,
        })
    }catch(error){
        res.status(500).json({ error: error.message})
    }
};
exports.add = async (req, res, next) => {
    try {
        let category = {
            name: req.body.name,
            description: req.body.description,
            status: req.body.status,
            role: req.body.role,
        };
        const add = await categories.add(category);
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

    let result = await categories.delete(id);

    console.log(result);
    res.status(201).json({
        result: result
    })
};
exports.update = async (req, res, next) => {
    try {
        let id = req.params.id;
        let updatedCategory = {
           name: req.body.name,
           description: req.body.description,
           status: req.body.status,
           role: req.body.role,
        };

        const editCategories = await categories.update(id, updatedCategory);
        res.status(200).json({
            data: editCategories,
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};
