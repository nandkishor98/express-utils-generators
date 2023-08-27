const QRCode = require('qrcode');

const createQr = async(qr)=>{
    const qrData = await QRCode.toDataURL(qr);
    return qrData;
}

module.exports = { createQr };