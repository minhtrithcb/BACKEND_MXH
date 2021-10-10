// const cloudinary  = require("../config/cloudinary")
// const Catalogs = require('../models/Catalogs')

const User = require("../models/User")

class UserController {
    getAll (req, res) {
        User.find().sort({createdAt: 'desc'})
        .then(users => {
            return res.json({
                success: true,
                users, 
            })
        }).catch(err => {
            return res.json({
                success: false,
                msg: "Không tìm thấy users"
            })
        })
    }

    getInfo (req, res) {
        User.findById(req.uid)
        .then(info => {
            return res.json({
                success: true,
                info, 
            })
        }).catch(err => {
            return res.json({
                success: false,
                msg: "Không tìm thấy user"
            })
        })
    }

    // async add (req, res) {
    //     let image
    //     if (req?.file?.path) {            
    //         image = await cloudinary.uploader.upload(req.file.path);
    //     }
    //     Catalogs.create({
    //         title : req.body.title,
    //         slug :req.body.slug,
    //         description: req.body.description,
    //         image: image?.secure_url,
    //         cloud_id: image?.public_id
    //     }).then(() => {
    //         return res.json({
    //             success: true,
    //             msg: "Tạo Danh mục thành công"
    //         })
    //     }).catch(err => {
    //         return res.json({
    //             success: false,
    //             msg: err
    //         })
    //     })
    // }

    // async update (req, res) {
    //     try {
    //         let id = req.params.id
    //         let image
    //         let catalog = await Catalogs.findById(id).select("+cloud_id")
    //         if (req?.file?.path) {            
    //             image = await cloudinary.uploader.upload(req.file.path);
    //             cloudinary.uploader.destroy(catalog.cloud_id)
    //         }
    //         catalog.updateOne({
    //             title : req.body.title,
    //             slug :req.body.slug,
    //             description: req.body.description,
    //             image: image?.secure_url || catalog.image,
    //             cloud_id: image?.public_id || catalog.cloud_id
    //         })
    //         .then(() => {
    //             return res.json({
    //                 success: true,
    //                 msg: "Sửa Danh mục thành công"
    //             })
    //         })
    //         .catch((error )=> {
    //             return res.json({
    //                 success: false,
    //                 msg: error
    //             })
    //         })
            
    //     } catch (error) {
    //         return res.json({
    //             success: false,
    //             msg: error
    //         })
            
    //     }
    // }

    // async delete (req,res) {
    //     try {
    //         let id = req.params.id
    //         let catalog = await Catalogs.findById(id).select("+cloud_id")
    //         cloudinary.uploader.destroy(catalog.cloud_id)
    //         catalog.remove();

    //         return res.json({
    //             success: true,
    //             msg: "Xóa Danh mục thành công"
    //         })
    //     } catch (error) {
    //         return res.json({
    //             success: false,
    //             msg: error
    //         })
            
    //     }
    // }
}

module.exports = new UserController