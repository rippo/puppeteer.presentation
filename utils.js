function MyDate(today) {
  this.today = today;
}

MyDate.prototype.formatted = function(daysToAdd) {
  var nextDay = this.today.addDays(daysToAdd);
  return `${nextDay.dd()}/${nextDay.mm()}/${nextDay.yyyy()}`;
};

module.exports = MyDate;

//Extend DATE
Date.prototype.addDays = function(days) {
  var dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
};   

Date.prototype.dd = function() {
  var dat = new Date(this.valueOf());
  return dat.getDate();
};

Date.prototype.mm = function() {
  var dat = new Date(this.valueOf());
  var mm = dat.getMonth()+1; //January is 0!
  if (mm < 10) mm = "0" + mm;
  return mm;
};    

Date.prototype.yyyy = function() {
  var dat = new Date(this.valueOf());
  return dat.getFullYear();    
}    

