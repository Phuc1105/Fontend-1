const  personnels = require('../../models/personnels');
const path = require('path');


exports.getPersonnel = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 6;
        const offset = (page - 1) * limit;

        const { data, total } = await personnels.fetchAll(offset, limit);
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
                first: `${req.baseUrl}/personnels?page=1&limit=${limit}`,
                last: `${req.baseUrl}/personnels?page=${totalPages}&limit=${limit}`,
                prev: page > 1 ? `${req.baseUrl}/personnels?page=${page - 1}&limit=${limit}` : null,
                next: page < totalPages ? `${req.baseUrl}/personnels?page=${page + 1}&limit=${limit}` : null
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.detail = async (req, res, next) =>{
    try{
        let id = req.params.id;
        const personnel = await personnels.fetchById(id);
        res.status(201).json({
            data: personnel,
        })
    }catch(error){
        res.status(500).json({ error: error.message})
    }
};
exports.add = async (req, res, next) => {
    try {
        let personnel = {
            username: req.body.username,
            phone: req.body.phone,
            position: req.body.position,
            shift: req.body.shift,
            img: req.body.img
        };
        const add = await personnels.add(personnel);
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

    let result = await personnels.delete(id);

    console.log(result);
    res.status(201).json({
        result: result
    })
};
exports.update = async (req, res, next) => {
    try {
        let id = req.params.id;
        let personnel = {
            username: req.body.username,
            phone: req.body.phone,
            position: req.body.position,
            shift: req.body.shift,

        };
        if (req.file) {
            personnel.img = req.file.filename;
        } else if (req.body.img) {
            personnel.img = req.body.img;
        }
        const editPersonnel = await personnels.update(id, personnel);
        res.status(200).json({
            data: editPersonnel,
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};