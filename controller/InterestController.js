const interest = require("../models/interest")

class InterestController {

    getAll (req, res) {
        interest.find().sort({createdAt: 'desc'})
        .then(inters => {
            return res.json({
                success: true,
                inters, 
            })
        }).catch(err => {
            return res.json({
                success: false,
                msg: "Không tìm thấy sở thích nào"
            })
        })
    }

    create (req,res) {
        interest.create({
            name: req.body.name,
            icon: req.body.icon,
            color: req.body.color,
        }).then(() => {
            return res.json({
                success: true,
                msg: "Tạo sở thích thành công"
            })
        }).catch(err => {
            return res.json({
                success: false,
                msg: err
            })
        })
    }

    async update (req, res) {

    }

    async delete (req,res) {
    
    }
}

module.exports = new InterestController