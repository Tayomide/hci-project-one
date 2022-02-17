"use strict";

// Add default styles to show which input is not valid

var information =[
  {
    Country:"shippingCountry",
    Fullname:"shippingFullName",
    Phonenumber:"shippingPhoneNumber",
    Address1:"shippingAddress1",
    Address2:"shippingAddress2",
    City:"shippingCity",
    State:"shippingState",
    Zip:"shippingZip"
  },
  {
    Country:"billingCountry",
    Fullname:"billingFullName",
    Phonenumber:"billingPhoneNumber",
    Address1:"billingAddress1",
    Address2:"billingAddress2",
    City:"billingCity",
    State:"billingState",
    Zip:"billingZip"
  },
  {
    Name:"cardName",
    Number:"cardNumber",
    Expiry:"cardExpiry",
    Cvv:"cardCvv"
  },
  {
    Subtotal:"priceSubtotal",
    Tax:"priceTax",
    Shipping:"priceShipping",
    Coupon:"priceCoupon",
    Total:"priceTotal"
  }
];

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

var billButton = document.querySelector('#address-populate');
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
try {
  makeOL(products, 'product-list', default_selector);
} catch (error) {
  console.log("Not in homepage");
}

// Getting form fields data
function doForm(integer) {
  if(document.forms[0].checkValidity()){
    if (parseInt(integer) === 1 || parseInt(integer) === 0){
      // Use local storage to store input data
      localStorage.setItem(information[parseInt(integer)].Country, document.forms[0].country.value);
      localStorage.setItem(information[parseInt(integer)].Fullname, document.forms[0].fullname.value);
      localStorage.setItem(information[parseInt(integer)].Phonenumber, document.forms[0].telephone.value);
      localStorage.setItem(information[parseInt(integer)].Address1, document.forms[0].address[0].value);
      localStorage.setItem(information[parseInt(integer)].Address2, document.forms[0].address[1].value);
      localStorage.setItem(information[parseInt(integer)].City, document.forms[0].city.value);
      localStorage.setItem(information[parseInt(integer)].State, document.forms[0].state.value);
      localStorage.setItem(information[parseInt(integer)].Zip, document.forms[0].zip.value);
    } else{
      localStorage.setItem(information[parseInt(integer)].Name, document.forms[0].cardname.value);
      localStorage.setItem(information[parseInt(integer)].Number, document.forms[0].cardnumber.value);
      localStorage.setItem(information[parseInt(integer)].Expriry, document.forms[0].expirationdate.value);
      localStorage.setItem(information[parseInt(integer)].Cvv, document.forms[0].cvv.value);
    }
    if(parseInt(integer) === 0 && document.querySelector('#bill').checked){
      localStorage.setItem(information[1].Country, document.forms[0].country.value);
      localStorage.setItem(information[1].Fullname, document.forms[0].fullname.value);
      localStorage.setItem(information[1].Phonenumber, document.forms[0].telephone.value);
      localStorage.setItem(information[1].Address1, document.forms[0].address[0].value);
      localStorage.setItem(information[1].Address2, document.forms[0].address[1].value);
      localStorage.setItem(information[1].City, document.forms[0].city.value);
      localStorage.setItem(information[1].State, document.forms[0].state.value);
      localStorage.setItem(information[1].Zip, document.forms[0].zip.value);
    }
    location.replace('/cart');
  }
}

billButton.addEventListener('click', function (){
  document.forms[0].country.value = localStorage.getItem(information[1].Country);
  document.forms[0].fullname.value = localStorage.getItem(information[1].Fullname);
  document.forms[0].telephone.value = localStorage.getItem(information[1].Phonenumber);
  document.forms[0].address[0].value = localStorage.getItem(information[1].Address1);
  document.forms[0].address[1].value = localStorage.getItem(information[1].Address2);
  document.forms[0].city.value = localStorage.getItem(information[1].City);
  document.forms[0].state.value = localStorage.getItem(information[1].State);
  document.forms[0].zip.value = localStorage.getItem(information[1].Zip);
});

function populate(){
  // get current user location
  var location = document.location.pathname;
  // shipping
  if(location === "/shipping/") {
    if(typeof localStorage.getItem(information[0].Country) !== 'undefined'){
      document.forms[0].country.value = localStorage.getItem(information[0].Country);
      document.forms[0].fullname.value = localStorage.getItem(information[0].Fullname);
      document.forms[0].telephone.value = localStorage.getItem(information[0].Phonenumber);
      document.forms[0].address[0].value = localStorage.getItem(information[0].Address1);
      document.forms[0].address[1].value = localStorage.getItem(information[0].Address2);
      document.forms[0].city.value = localStorage.getItem(information[0].City);
      document.forms[0].state.value = localStorage.getItem(information[0].State);
      document.forms[0].zip.value = localStorage.getItem(information[0].Zip);
    }
  } else if(location === "/billing/"){// billing
    if(typeof localStorage.getItem(information[1].Country) !== 'undefined'){
      document.forms[0].country.value = localStorage.getItem(information[1].Country);
      document.forms[0].fullname.value = localStorage.getItem(information[1].Fullname);
      document.forms[0].telephone.value = localStorage.getItem(information[1].Phonenumber);
      document.forms[0].address[0].value = localStorage.getItem(information[1].Address1);
      document.forms[0].address[1].value = localStorage.getItem(information[1].Address2);
      document.forms[0].city.value = localStorage.getItem(information[1].City);
      document.forms[0].state.value = localStorage.getItem(information[1].State);
      document.forms[0].zip.value = localStorage.getItem(information[1].Zip);
    }
  } else if(location === "/cart/"){ // payment
    if(typeof localStorage.getItem(information[2].Name) !== 'undefined') {
      document.forms[0].cardname.value = localStorage.getItem(information[2].Name);
      document.forms[0].cardname.value = localStorage.getItem(information[2].Number);
      document.forms[0].expirationdate.value = localStorage.getItem(information[2].Expiry);
      document.forms[0].cvv.value = localStorage.getItem(information[2].Cvv);
    }
  }
  console.log("worked");
}

populate();
