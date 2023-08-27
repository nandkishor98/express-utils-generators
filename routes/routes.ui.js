const { render } = require("ejs");

const router = require("express").Router();

router.get("/",(req,res)=>{
    res.render(index,{data:"hello world"})
});

router.get("/login",(req, res)  => {
    res.render("login");
});

router.get("/contact",(req,res) => {
    res.render("contact");
})

module.exports=router;














