let Sequelize=require("sequelize")
let sequelize=require('../util/database')

let user=sequelize.define("product",{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    product:{
        type:Sequelize.STRING,
        allowNull:false
    },
    category:{
        type:Sequelize.STRING,
        allowNull:false,
    }


})
module.exports=user