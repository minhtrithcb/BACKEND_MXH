const mongoose = require('mongoose');
const connectDB = require('./connection');
const seederCatalog = require('./seedCatalog')
const seederProduct = require('./seedProduct')

connectDB()
.then( async ()  => {
    seeder([
        seederProduct(), 
        seederCatalog()
    ])
})
.catch(err => console.log(err))


const seeder = (arr) => {
    let all = arr.map(res => {
        return Promise.resolve(res)
    })
    Promise.all(all)
    .then(function (docs) {
        console.log("SEED THÀNH CÔNG!");
        mongoose.disconnect();
    })
    .catch(function (err) {
        console.log(err);
        mongoose.disconnect();
    });
}
