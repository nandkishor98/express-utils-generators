const router = require("express").Router();
const QRCode = require("../modules/qrcode");
const currencyConvertr = require("../modules/currency")


router.get("/qr", async (req,res)=>{
    const { qr }=req.query;
    const qrData = await QRCode.toDataURL(qr);
    res.send(`<img src=${qrData}/>`);
});

router.get('/currency', async (req, res)=>{
   const toConvert = new currencyConvertr();
   console.log(req.query);
    const {from, to, amount } = req.quary;

    const converter = await toConvert
        .from(from)
        .to(to)
        .amount(parseInt(amount))
        .convert()
        
    res.send(`<h1>The currency ${convert}<h1>`);
})

module.exports=router;