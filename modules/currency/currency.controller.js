const CC = require('currency-converter');

const convert = async(data)=>{
    const { from, to, amount} = data;
    const currencyConverter = new CC();
    const result = await currencyConverter
    .from(from)
    .to(to)
    .amount(amount)
    .convert()
  return result;
};

module.exports = { converter };