const router=require ("express").Router();
const currencyController=require("./currency.controller");

router.get("/", (res, res)=>{
    res.send("Currency API is working")
});

router.post("/", async (req, res, next)=>{
    try{
        const { from, to, amount } = res.body;
        console.log({ from, to, amount});
        const response = await currencyController.converter({ from, to, amount});
        res.send({from: from, to: to, amoun: amount, result: response});
    } catch (e) {
        next (e);
    }
});

module.exports = router;