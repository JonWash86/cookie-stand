/*function hourlyCustomers(x,y){
  min = Math.ceil(x);
  max = Math.floor(y+1);
  return Math.floor(Math.random()*(max-min)) + min;
}


function hourlyCookies(x,y){
  min = Math.ceil(x);
  max = Math.floor(y);
  return Math.floor((Math.random() * (max-min)) + min) * 5.2;
}

var store1 = {
  name:"Pioneer Square",
  hourlyCookies: function(x,y){
    min = Math.ceil(x);
    max = Math.floor(y);
    return Math.floor((Math.random() * (max-min)) + min) * 5.2;
  },
  specificCookies: hourlyCookies(88,17),
}
// So the issue here is when I include the function in the object, I can call the function from the console and get good results. However, when I define the function outside the object, then add a call for it within my object, I always get the one answer.

var store2 = {
  name:"Portland Airport",

}

var store3 = {
  name:"Washington Square",
}

var store4 = {
  name:"Sellwood",
}

var store5 = {
  name:"Pearl District",
}
*/



var Shoppe = function(shoppeName, minCustomers, maxCustomers, averageCookies){
  this.shoppeName = shoppeName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookies = averageCookies;
  //mincustomers
  //maxcustomers
  //average cookies per hour
  //generate random hourlycustomers
  //
}

Shoppe.prototype.generateRandom = function(){
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
}

Shoppe.prototype.randomHourlyCookies = function(){
  var thisHour = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  return (thisHour * this.averageCookies);
}

var PioneerSquareShoppe = new Shoppe("Pioneer Square", 17, 88, 5.2);
/*var
var
var
var
*/
console.log(PioneerSquareShoppe);
console.log(PioneerSquareShoppe.generateRandom());
console.log(PioneerSquareShoppe.randomHourlyCookies());
