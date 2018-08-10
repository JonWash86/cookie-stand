
var Shoppe = function(shoppeName, minCustomers, maxCustomers, averageCookies, identification, tableID){
  this.shoppeName = shoppeName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookies = averageCookies;
  this.identification = identification;
}

Shoppe.prototype.generateRandom = function(){
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
}

Shoppe.prototype.randomHourlyCookies = function(){
  var thisHour = Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers;
  return Math.floor(thisHour * this.averageCookies);
}

var PioneerSquareShoppe = new Shoppe("Pioneer Square", 17, 88, 5.2, 'pioneer','pioneerTable');
var PortlandAirportShoppe = new Shoppe("Portland Airport", 6, 24, 1.2, 'airport');
var WashingtonSquareShoppe = new Shoppe("Washington Square", 11, 38, 1.9, 'square');
var SellwoodShoppe = new Shoppe("Sellwood", 20, 48, 3.3,'sellwood');
var PearlDistrictShoppe = new Shoppe("Pearl District", 3, 24, 2.6,'pearl');

var hours = [
  '10am: ', '11am: ', '12am: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ',
]

Shoppe.prototype.buildList = function(){
  var list = document.getElementById(this.identification);
  var dailyTotal = 0;
  for (var index = 0; index < hours.length; index++){
    var hour = hours[index];
    var cookies = this.randomHourlyCookies();
    list.innerHTML += '<li>'+ hour +'   ' + cookies +'</li>';
    dailyTotal += cookies;
  }
  list.innerHTML += '<li>Total: '+ dailyTotal + '</li>';
}

//stretch goal: build a table for the shoppes
Shoppe.prototype.buildTable = function(){
  var table = document.getElementById(this.tableID);
  var dailyTotal = 0;
  for (var index = 0; index < hours.length; index++){
    var cookies = this.randomHourlyCookies();
    table.innerHTML += '<td>' + cookies +'</td>';
    dailyTotal += cookies;
  }
  table.innertHTML += '<td>' + dailyTotal +'</td>';
}
PioneerSquareShoppe.buildTable();

//end fumbling at stretch goal.

PioneerSquareShoppe.buildList();
PortlandAirportShoppe.buildList();
WashingtonSquareShoppe.buildList();
SellwoodShoppe.buildList();
PearlDistrictShoppe.buildList();

console.log(PioneerSquareShoppe);
console.log(PioneerSquareShoppe.randomHourlyCookies());

console.log(PortlandAirportShoppe);
console.log(PortlandAirportShoppe.randomHourlyCookies());

console.log(WashingtonSquareShoppe);
console.log(WashingtonSquareShoppe.randomHourlyCookies());

console.log(SellwoodShoppe);
console.log(SellwoodShoppe.randomHourlyCookies());

console.log(PearlDistrictShoppe);
console.log(PearlDistrictShoppe.randomHourlyCookies());
