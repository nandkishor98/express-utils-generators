const router = require("express").Router();
const QRCode = require("../modules/qrcode");


router.get("/",(req,res)=>{
    res.send("Hello");
});

router.post('/qr', async (req, res)=>{
  //const { qr } = req.query;
  //req.params
  try {
  const { name: qr } = req.body;
  const qrData = await QRCode.toDataURL(qr);        
    res.send(`<img src="${qrData}"/> `);
  } catch (e) {
    res.send("something went wrong");
  }
});

module.exports=router;