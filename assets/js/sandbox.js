"use strict";

var products = [
  {name:"Wristwatch",
    description:"Mobile wrist watch that tells time. Duh",
    image_url:"image_url",
    price:""},
  {name:"Wristwatch",
    description:"Mobile wrist watch that tells time. Duh",
    image_url:"image_url",
    price:""},
  {name:"Wristwatch",
    description:"Mobile wrist watch that tells time. Duh",
    image_url:"image_url",
    price:""},
  {name:"Wristwatch",
    description:"Mobile wrist watch that tells time. Duh",
    image_url:"image_url",
    price:""},
  {name:"Wristwatch",
    description:"Mobile wrist watch that tells time. Duh",
    image_url:"image_url",
    price:""},
  {name:"Wristwatch",
    description:"Mobile wrist watch that tells time. Duh",
    image_url:"image_url",
    price:""},
  {name:"Wristwatch",
    description:"Mobile wrist watch that tells time. Duh",
    image_url:"image_url",
    price:""},
  {name:"Wristwatch",
    description:"Mobile wrist watch that tells time. Duh",
    image_url:"image_url",
    price:""}
];
// Default selector in the event every object in array is needed e.g home page
var default_selector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function makeOL(array, id, selected){
  var i;
  var listItems;

  // Add appropriate number of list
  for ( i = 0; i < selected.length; i++) {
    document.getElementById(id).appendChild(document.createElement('li'));
  }

  listItems = document.getElementById(id).getElementsByTagName('li');

  for ( i in selected ) {
    listItems[i].appendChild(document.createElement('img'));
    listItems[i].querySelector('img').src = array[i].image_url;
    listItems[i].appendChild(document.createElement('p'));
    listItems[i].querySelector('p').className = "name";
    listItems[i].querySelector('p').innerHTML = array[i].name;
    listItems[i].appendChild(document.createElement('p'));
    listItems[i].querySelector('p:not(.name)').className = "description";
    listItems[i].querySelector('p:not(.name)').innerHTML = array[i].description;
    listItems[i].appendChild(document.createElement('p'));
    listItems[i].querySelector('p:not(.name, .description)').className = "price";
    listItems[i].querySelector('p:not(.name, .description)').innerHTML = array[i].price;
  }
}

// Home page initialization
makeOL(products, 'product_list', default_selector);
