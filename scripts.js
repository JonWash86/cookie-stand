var Shoppe = function(shoppeName, minCustomers, maxCustomers, averageCookies, identification, tableID){
  this.shoppeName = shoppeName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookies = averageCookies;
  this.identification = identification;
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

//write a function which writes the table heading to the proper area.
var shoppes = [
  PioneerSquareShoppe,
  PortlandAirportShoppe,
  WashingtonSquareShoppe,
  SellwoodShoppe,
  PearlDistrictShoppe,
]

Shoppe.prototype.writeTableHeading = function(){
  var div = document.getElementById('salesTables');
  var table = document.createElement('TABLE');
  var row = document.createElement('tr');
  var cell = document.createElement('td');
  var heading = document.createElement('th');
  heading.innerText = this.shoppeName;
  table.appendChild(heading);
  div.appendChild(table);
  /*for (var index = 0; index < hours.length; index++){
    var hour = hours[index];
    var cookies = this.randomHourlyCookies();
    cell.innerText = hour;
    row.appendChild(cell);
    cell = document.createElement('td');
    cell.innerText = cookies;
    row.appendChild(cell);
    table.appendChild(row);

  };*/
}
PioneerSquareShoppe.writeTableHeading(tableReference);

var tableReference = document.getElementById('salesTables');

for (var index = 0; index < shoppes.length; index++){
  shoppes[index].writeTableHeading(tableReference);
}



//below is the new, in-progress function to write the table.


/*
//The following is the commented-out original function, which wrote a list.

Shoppe.prototype.writeList = function(){
  var list = document.getElementById(this.identification);
  var dailyTotal = 0;
  for (var index = 0; index < hours.length; index++){
    var hour = hours[index];
    var cookies = this.randomHourlyCookies();
    console.log(cookies);
    var listItem = document.createElement('li');
    console.log(listItem);
    listItem.innerText = (hour + ' ' + cookies);
    list.appendChild(listItem);
    console.log(listItem);
    dailyTotal += cookies;
  }
  var finalTotal = document.createElement('li');
  finalTotal.innerText = ('Total: '+ dailyTotal);
  list.appendChild(finalTotal);
}

PioneerSquareShoppe.writeList();
PortlandAirportShoppe.writeList();
WashingtonSquareShoppe.writeList();
SellwoodShoppe.writeList();
PearlDistrictShoppe.writeList();



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

*/
