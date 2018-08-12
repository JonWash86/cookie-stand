
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


//below I've copied the original buildlist function and am updating it to create a node on the DOM and add the list items that way.

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
//end of updated function.

/*the following function is commented out for now. It is the untouched buildlist function.
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
} */

//PioneerSquareShoppe.buildList();
//PortlandAirportShoppe.buildList();
//WashingtonSquareShoppe.buildList();
//SellwoodShoppe.buildList();
//PearlDistrictShoppe.buildList();

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
