let Sequelize=require("sequelize")
let sequelize=require('../util/database')

let user=require('../models/define')

exports.addmethod=async(req,res)=>{
    try{
        const price=req.body.price;
        const product=req.body.product;
        const category=req.body.category;
        console.log(product,price,category);

        const data=await user.create({
            price:price,
            product:product,
            category:category
        })
        res.json({productname:data})
    }catch(e){
        res.json({Error:e})
    }
}


exports.getmethod=async(req,res)=>{
    try{
        const data=await user.findAll()
        res.json({allusers:data})
    }catch(e){
        console.log("this is error from app.js in get method")
        res.json({Error:e})
    }
}

exports.deletemethod=async(req,res)=>{
    try{
        if(!req.params.id){
            throw new Error ("id is mandatory to delete")
        }
        let delid=req.params.id;
        console.log(req.params.id)
        await user.destroy({where: {id:delid}})
    }catch(e){
        console.log("error in app.js delete method")
        res.json({Error:e})
        
    }
}