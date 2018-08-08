function hourlyCustomers(x,y){
  min = Math.ceil(x);
  max = Math.floor(y+1);
  return Math.floor(Math.random()*(max-min)) + min;
}

var store1 = {
  name:"Pioneer Square",
  hourlyCookies: function(){
    return Math.random()
  }
}

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
