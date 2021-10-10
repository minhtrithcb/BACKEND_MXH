const cloudinary = require('cloudinary').v2;
const {CLOUD_NAME, CLOUD_KEY, CLOUD_SECRET} = require("./index")

cloudinary.config({ 
    cloud_name: CLOUD_NAME, 
    api_key: CLOUD_KEY, 
    api_secret: CLOUD_SECRET,
});

module.exports = cloudinary