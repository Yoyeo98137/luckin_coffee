const express=require("express");
var router=express.Router();
var pool=require("../pool");

router.get("/",(req,res)=>{
  sql = `
  select * from vedio;
  `
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result[0])
  })
})

module.exports=router;