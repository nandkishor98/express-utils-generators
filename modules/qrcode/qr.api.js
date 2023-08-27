const router=require ("express").Router();
const qrCOnverter=require(".qr.controller");

router.get("/", (res, res)=>{
    res.send("QR API is working")
});

router.post("/", async (req, res, next)=>{
    try{
        const { name: qr } = res.body;
        const result = await qrController.creatQR(qr);
        res.send(`<imag src="${result}"/>`);
    } catch (e) {
        next (e);
    }
});

module.exports = router;