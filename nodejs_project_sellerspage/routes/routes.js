const express=require('express');
let bodyparser=require('body-parser')
let routes=express.Router();

let add=require('../controllers/add');
routes.post("/add-details",add.addmethod)

routes.get("/show-details",add.getmethod)

routes.delete("/delete-details/:id",add.deletemethod)

module.exports=routes