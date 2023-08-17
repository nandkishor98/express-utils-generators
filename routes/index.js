const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("Hello");
});

router.get("/hello",(req,res) => {
    res.send("hello from hello route");
});

router.post("/hello", (req,res)=>{
    res.send("post hello route")
});

module.exports=router;