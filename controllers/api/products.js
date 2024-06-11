const  products = require('../../models/products');
const path = require('path');


exports.getProducts = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 6;
        const offset = (page - 1) * limit;

        const { data, total } = await products.fetchAll(offset, limit);
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
                first: `${req.baseUrl}/products?page=1&limit=${limit}`,
                last: `${req.baseUrl}/products?page=${totalPages}&limit=${limit}`,
                prev: page > 1 ? `${req.baseUrl}/products?page=${page - 1}&limit=${limit}` : null,
                next: page < totalPages ? `${req.baseUrl}/products?page=${page + 1}&limit=${limit}` : null
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// exports.getProducts = async (req, res, next) => {
//     try {
//         const productslList = await products.fetchAll();
//         res.status(200).json({ data: productslList });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };
exports.getCategory = async (req, res, next) => {
    try {
        const productslList = await products.fetchAllCategory();
        res.status(200).json({ data: productslList });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.detail = async (req, res, next) =>{
    try{
        let id = req.params.id;
        const productsGetId = await products.fetchById(id);
        res.status(201).json({
            data: productsGetId,
        })
    }catch(error){
        res.status(500).json({ error: error.message})
    }
};
exports.add = async (req, res, next) => {
    try {
        let product = {
            product_name: req.body.product_name,
            image: req.body.image,
            price: req.body.price,
            status: req.body.status,
            category: req.body.category
        };
        const add = await products.add(product);
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

    let result = await products.delete(id);

    console.log(result);
    res.status(201).json({
        result: result
    })
};
exports.update = async (req, res, next) => {
    try {
let id = req.params.id;
        let product = {
            product_name: req.body.product_name,
            image: req.body.image,
            price: req.body.price,
            status: req.body.status,
            category: req.body.category
        };
        if (req.file) {
            product.img = req.file.filename;
        } else if (req.body.img) {
            product.img = req.body.img;
        }
        const editProduct = await products.update(id, product);
        res.status(200).json({
            data: editProduct,
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};
