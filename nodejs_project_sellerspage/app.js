let express=require('express');
let bodyparser=require('body-parser');
let cors=require('cors');
let productdetails=require('./routes/routes')
let sequelize=require('./util/database')
let app=express();
app.use(bodyparser.json());
app.use(cors());

app.use(productdetails)

sequelize.sync().then(()=>{
    app.listen(4500)
})
