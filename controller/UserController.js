const cloudinary  = require("../config/cloudinary")
const User = require("../models/User")

class UserController {

    getAll (req, res) {
        User.find()
        .sort({createdAt: 'desc'})
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
        .populate("friend")
        .populate("interests")
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

    getUserById (req, res) {
        let id = req.params.id
        User.findById(id)
        .then(user => {
            return res.json({
                success: true,
                user, 
            })
        }).catch(err => {
            return res.json({
                success: false,
                msg: "Không tìm thấy user"
            })
        })
    }

    async update (req, res) {
        let ava, bg
        let user = await User.findById(req.uid).select("+ava_clond_id +bg_clond_id")
        try {
            if (req.files && req.files['avatar'] !== undefined) {      
                ava = await cloudinary.uploader.upload(req.files['avatar'][0].path)
                user.ava_clond_id && cloudinary.uploader.destroy(user.ava_clond_id)
            }
            
            if (req.files && req.files['background'] !== undefined) {      
                bg = await cloudinary.uploader.upload(req.files['background'][0].path)
                user.bg_clond_id && cloudinary.uploader.destroy(user.bg_clond_id)
            }         
            
            let inters = (req.body.interests) ? JSON.parse(req.body.interests) :  user.interests

            await user.updateOne({
                fullname :      req.body.fullname,
                mobile :        req.body.mobile,
                adress:         req.body.adress,
                avatar:         ava?.secure_url  || user.avatar,
                ava_clond_id:   ava?.public_id   || user.ava_clond_id,
                background:     bg?.secure_url   || user.background,
                bg_clond_id:    bg?.public_id    || user.bg_clond_id,
                interests: inters,
                intro: {
                    school: req.body.school, 
                    school_college: req.body.school_college, 
                    school_university: req.body.school_university, 
                    worked: req.body.worked,
                    work: req.body.work,
                    married_status: req.body.married_status,
                    living: req.body.living,
                }
            })
            
            return res.json({
                success: true,
                msg: "Sửa thành công"
            })

        } catch (error) {
            console.log(error);
            return res.json({
                success: false,
                msg: error
            })
        }

    }

    // user.updateOne({
    //     fullname : req.body.fullname,
    //     mobile :req.body.mobile,
    //     adress: req.body.adress,
    //     avatar:         ava.secure_url  || user.avatar,
    //     ava_clond_id:   ava.public_id   || user.ava_clond_id,
    //     background:     bg.secure_url   || user.background,
    //     bg_clond_id:    bg.public_id    || user.bg_clond_id
    // })
    // .then(() => {
    //     return res.json({
    //         success: true,
    //         msg: "Sửa thành công"
    //     })
    // })
    // .catch((error)=> {
    //     return res.json({
    //         success: false,
    //         msg: error
    //     })
    // })
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