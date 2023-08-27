const router = require("express").Router();


const qrRouter = require("../modules/qrcode/qr.api");
const mailRouter = require("../modules/Mail/mail.api");
const currencyRouter = require("../modules/currency/currency.api");

router.get("", (req, res) =>{
  res.send("API is not working");
});

router.use("/qr", qrRouter);
router.use("/currency". currencyRouter);
router.use("/mail",mailRouter);

module.exports = router;
