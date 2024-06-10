const discounts = require('../../models/discount');

exports.get = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 6;
        const offset = (page - 1) * limit;

        const { data, total } = await discounts.fetchAll(offset, limit);
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
                first: `${req.baseUrl}/discounts?page=1&limit=${limit}`,
                last: `${req.baseUrl}/discounts?page=${totalPages}&limit=${limit}`,
                prev: page > 1 ? `${req.baseUrl}/discounts?page=${page - 1}&limit=${limit}` : null,
                next: page < totalPages ? `${req.baseUrl}/discounts?page=${page + 1}&limit=${limit}` : null
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getById = async (req, res, next) => {
    try {
        let id = req.params.id;
        const discount = await discounts.fetchById(id)
        res.status(201).json({
            data: discount,
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
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
exports.add = async (req, res, next) => {
    try {
        let discount = {
            nameDiscount: req.body.nameDiscount,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            status: req.body.status,
            img: req.body.img,
            contentDiscount: req.body.contentDiscount
        };
        const add = await discounts.add(discount);
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
function formatDate(dateString) {
    const date = new Date(dateString);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const hh = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    const ss = String(date.getSeconds()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;
}
exports.update = async (req, res, next) => {
    try {
        const startDate = formatDate(req.body.startDate);
        const endDate = formatDate(req.body.endDate);
        let id = req.params.id;
        let discount = {
            nameDiscount: req.body.nameDiscount,
            startDate: startDate,
            endDate: endDate,
            status: req.body.status,
            contentDiscount: req.body.contentDiscount
        };
        if (req.file) {
            discount.img = req.file.filename;
        } else if (req.body.img) {
            discount.img = req.body.img;
        }
        const editPersonnel = await discounts.update(id, discount);
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