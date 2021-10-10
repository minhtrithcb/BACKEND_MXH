const bcrypt = require('bcrypt');
const User = require("../models/User")
const {A_TOKEN_SECRET} = require("../config")
const jwt = require("jsonwebtoken")

class AuthController {
   
    async dangky (req, res) {

        // Check email tồn tại
        const emailExi = await User.findOne({email: req.body.email})
        if (emailExi) return res.json({success: false, msg :"Email đã tồn tại"})

        // Hash password
        const hashPass = await bcrypt.hash(req.body.password, 10)

        User.create({
            fullname: req.body.fullname,
            password: hashPass,
            email: req.body.email,
        }).then(() => {
            return res.json({
                success: true,
                msg: "Tạo Tài khoản thành công"
            })
        }).catch(err => {
            return res.json({
                success: false,
                msg: err
            })
        })
    }

    async dangnhap (req, res) {
        let user = await User.findOne({ email: req.body.email })
        .select("_id password")

        // Check accout tồn tại
        if (!user) return res.json({success: false, msg: "Không tìm thấy email hoặc tài khoản này"})
        // Check mật khẩu

        const passValid = await bcrypt.compare(req.body.password , user.password)
        if (!passValid) return res.send({success: false, msg: "Sai mật khẩu"})
        
        // Tạo accessToken 
        const accessToken = jwt.sign({_id : user._id},A_TOKEN_SECRET, { expiresIn: '1h' })
        return res.json({success: true, accessToken})
    }
}

module.exports = new AuthController