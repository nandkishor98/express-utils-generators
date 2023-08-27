const router=require ("express").Router();
const mailService=require("../../service/mailer");

router.get("/", (res, res)=>{
    res.send("Mail API is working")
});

router.post("/", async (req, res, next)=>{
    try{
        const { from, to, message } = res.body;
        console.log({ from, to, amount});
        const response = await mailService.sendEmail({ from, to, message});
        res.send({from: from, to: to, message: message, result: response});
    } catch (e) {
        next (e);
    }
});

module.exports = router;