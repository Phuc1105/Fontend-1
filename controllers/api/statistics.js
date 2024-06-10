
const  statistics = require('../../models/statistics');
const path = require('path');

exports.getStatistics = async (req, res, next) => {
    try {
        const statistic = await statistics.fetchAll();
        res.status(200).json({ data: statistic });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
