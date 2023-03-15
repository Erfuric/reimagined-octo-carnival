const today = require('../server');

module.exports = {
  today_date: () => {
console.log(today);
return `${today}`
  }
};