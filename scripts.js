var Shoppe = function(shoppeName, minCustomers, maxCustomers, averageCookies, identification, tableID){
  this.shoppeName = shoppeName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookies = averageCookies;
  this.identification = identification;
  this.randomHourlyCookies = function(){
    var thisHour = Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers;
    return Math.floor(thisHour * this.averageCookies);
  }
}


var PioneerSquareShoppe = new Shoppe("Pioneer Square", 17, 88, 5.2, 'pioneer','pioneerTable');
var PortlandAirportShoppe = new Shoppe("Portland Airport", 6, 24, 1.2, 'airport');
var WashingtonSquareShoppe = new Shoppe("Washington Square", 11, 38, 1.9, 'square');
var SellwoodShoppe = new Shoppe("Sellwood", 20, 48, 3.3,'sellwood');
var PearlDistrictShoppe = new Shoppe("Pearl District", 3, 24, 2.6,'pearl');

var hours = [
  '10am: ', '11am: ', '12am: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ',
]

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
  var dailyTotal = 0;
  table.setAttribute('id', 'columns');
  heading.innerText = this.shoppeName;
  heading.setAttribute('colspan','2');
  table.appendChild(heading);
  div.appendChild(table);
  for (var index = 0; index < hours.length; index++){
    var cell = document.createElement('td');
    var row = document.createElement('tr');
    var hour = hours[index];
    var cookies = this.randomHourlyCookies();
    cell.innerText = hour;
    console.log(cell);
    row.appendChild(cell);
    console.log(row);
    cell = document.createElement('td');
    cell.innerText = cookies;
    console.log(cell);
    row.appendChild(cell);
    console.log(row);
    table.appendChild(row);
    dailyTotal += cookies;
  };
  cell = document.createElement('td');
  cell.innerText = ('Total: ' + dailyTotal);
  cell.setAttribute('colspan', '2');
  table.appendChild(cell);
}

var tableReference = document.getElementById('salesTables');

for (var index = 0; index < shoppes.length; index++){
  shoppes[index].writeTableHeading(tableReference);
}

// New function below for submitting the form 'addAStore' and updating the new store's information to the existing set of tables.

function enterNewStore (){
  var newShoppeName = document.getElementById('newName');
  var newShoppeMinCustomers = document.getElementById('newMin');
  var newShoppeMaxCustomers = document.getElementById('newMax');
  var newShoppeAvgCookies = document.getElementById('newAvg')

  //below is a copy of the write to table function, which I should cannibalize in order to create my table from the input. It's not a graceful solution, but it'll just grab all inputs and spit them out on the page.
  var div = document.getElementById('salesTables');
  var table = document.createElement('TABLE');
  var row = document.createElement('tr');
  var cell = document.createElement('td');
  var heading = document.createElement('th');
  var dailyTotal = 0;
  table.setAttribute('id', 'columns');
  heading.innerText = this.shoppeName;
  heading.setAttribute('colspan','2');
  table.appendChild(heading);
  div.appendChild(table);
  for (var index = 0; index < hours.length; index++){
    var cell = document.createElement('td');
    var row = document.createElement('tr');
    var hour = hours[index];
    var cookies = this.randomHourlyCookies();
    cell.innerText = hour;
    console.log(cell);
    row.appendChild(cell);
    console.log(row);
    cell = document.createElement('td');
    cell.innerText = cookies;
    console.log(cell);
    row.appendChild(cell);
    console.log(row);
    table.appendChild(row);
    dailyTotal += cookies;
  };
  cell = document.createElement('td');
  cell.innerText = ('Total: ' + dailyTotal);
  cell.setAttribute('colspan', '2');
  table.appendChild(cell);

}
var elForm = document.getElementById('addAStore');

elForm.addEventListener('submit', enterNewStore, false);
