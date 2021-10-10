const Catalogs = require("../models/Catalogs");

function seederCatalog() {
    const data = [
        {
            title : "Đồ nam",
            slug : "DJo-nam",
            description: "Trang phục nam",
        }, 
        {
            title : "Đồ nữ",
            slug : "DJo-nu",
            description: "Trang phục nữ",
        }, 
        {
            title : "Nón, mũ",
            slug : "Non-mu",
            description: "Thời trang nón, mũ",
        }, 
        {
            title : "Phụ kiện",
            slug : "Phu-kien",
            description: "Phụ kiện, trang sức",
        }, 
        {
            title : "Đồng hồ",
            slug : "DJong-ho",
            description: "Đồng hồ mẫu mới",
        }, 
        {
            title : "Giày",
            slug : "Giay",
            description: "Thời trang giày",
        }
    ];
    return Catalogs.insertMany(data)
}

module.exports = seederCatalog