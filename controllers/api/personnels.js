const  personnels = require('../../models/personnels');
exports.getPersonnel = async (req, res, next) => {
    try {
        const personnelList = await personnels.fetchAll();
        res.status(200).json({ data: personnelList });
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
            img: req.body.img,
        }
        const add = await personnels.add(personnel);
        res.status(200).json({
            data: add,
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};