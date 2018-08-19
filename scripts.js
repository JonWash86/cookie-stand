var Shoppe = function(shoppeName, minCustomers, maxCustomers, averageCookies){
  this.shoppeName = shoppeName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookies = averageCookies;
  this.randomHourlyCookies = function(){
    var thisHour = (Math.random() * (parseInt(this.maxCustomers) - parseInt(this.minCustomers) + 1)) + parseInt(this.minCustomers);
    console.log('max customers: ' + this.maxCustomers);
    console.log('min customers: ' + this.minCustomers);
    console.log('customers: ' + thisHour);
    return Math.floor(thisHour * this.averageCookies);
  };
}

var hours = [
  '10am: ', '11am: ', '12am: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ',
]

var shoppes = [];
shoppes.push(new Shoppe("Pioneer Square", 17, 88, 5.2));
shoppes.push(new Shoppe("Portland Airport", 6, 24, 1.2));
shoppes.push(new Shoppe("Washington Square", 11, 38, 1.9));
shoppes.push(new Shoppe("Sellwood", 20, 48, 3.3));
shoppes.push(new Shoppe("Pearl District", 3, 24, 2.6));

Shoppe.prototype.writeTableHeading = function(){
  var div = document.getElementById('salesTables');
  var table = document.createElement('TABLE');
  var heading = document.createElement('th');
  var dailyTotal = 0;
  table.setAttribute('class', 'columns');
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
    row.appendChild(cell);
    cell = document.createElement('td');
    cell.innerText = cookies;
    row.appendChild(cell);
    table.appendChild(row);
    dailyTotal += cookies;
  };
  cell = document.createElement('td');
  cell.innerText = ('Total: ' + dailyTotal);
  cell.setAttribute('colspan', '2');
  table.appendChild(cell);
};

for (var index = 0; index < shoppes.length; index++){
  shoppes[index].writeTableHeading();
}

function enterNewStore(){
  var newShoppeName = document.getElementById('newName').value;
  var newShoppeMinCustomers = document.getElementById('newMin').value;
  var newShoppeMaxCustomers = document.getElementById('newMax').value;
  var newShoppeAvgCookies = document.getElementById('newAvg').value;
  console.log('buttonpress');
  if ((newName.value =='')||(newMin.value=='')||(newMax.value=='')||(newAvg.value=='')){
    alert('Please enter all the fields.');
  }
  else {
    shoppes.push(new Shoppe(newShoppeName, newShoppeMinCustomers, newShoppeMaxCustomers, newShoppeAvgCookies));
    shoppes[shoppes.length -1].writeTableHeading();
  };
}

var elSubmit = document.getElementById('enterNew');
elSubmit.addEventListener('click', enterNewStore, false);

document.getElementsByClassName('shopForm')

function checkEmpty(i){
  var entry = document.getElementsByClassName('shopForm')[i];
  if (entry.value ==''){
     alert('Please don\'t leave this field empty.');
  }
  else return (true);
}
