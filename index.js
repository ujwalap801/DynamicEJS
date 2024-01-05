const exp = require("constants");
const express = require("express");
const { use } = require("express/lib/application");
const app=express();
const path = require("path");
const port= 8080;

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));

app.use(express.static("public"));



app.get("/ig/:username",(req,res)=>
{
    let {username} = req.params;
    const  instadata = require("./data .json");
    const data = instadata[username];
if(data){
    res.render("instagram.ejs",{data});
}else{
    res.render("error.ejs");
}
});
app.listen(port,()=>
{
    console.log(`listening to port ${port}`);

});