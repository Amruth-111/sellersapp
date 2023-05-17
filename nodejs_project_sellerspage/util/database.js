const Sequelize=require('sequelize');

const sequelize=new Sequelize("sellers_page","root","Admin@123",{
    dialect:"mysql",
    host:"localhost"
})

module.exports=sequelize;