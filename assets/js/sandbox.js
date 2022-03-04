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
var default_selector = [1, 2, 3, 4, 5, 6, 7, 8];
var main = document.querySelector("main");
var counte;

function makeOL(object, id, selected){
  var i;
  var listItems;

  // Add appropriate number of list
  for ( i = 0; i < selected.length; i++) {
    document.getElementById(id).appendChild(document.createElement('li'));
  }

  listItems = document.getElementById(id).getElementsByTagName('li');
  for ( i in selected ) {
    listItems[i].appendChild(document.createElement('img'));
    listItems[i].querySelector('img').src = object[i].image_url;
    listItems[i].appendChild(document.createElement('p'));
    listItems[i].querySelector('p').className = "name";
    listItems[i].querySelector('p').innerHTML = object[i].name;
    listItems[i].appendChild(document.createElement('p'));
    listItems[i].querySelector('p:not(.name)').className = "description";
    listItems[i].querySelector('p:not(.name)').innerHTML = object[i].description;
    listItems[i].appendChild(document.createElement('p'));
    listItems[i].querySelector('p:not(.name, .description)').className = "price";
    listItems[i].querySelector('p:not(.name, .description)').innerHTML = object[i].price;
    listItems[i].appendChild(document.createElement('button'));
    listItems[i].querySelector('button').className = "cart";
    listItems[i].querySelector('button').innerHTML = "Add cart";
  }
}

function cartFunction(item) {
  var cart_selc;
  if (!sessionStorage.getItem("cart_selector").includes(item)){
    cart_selc = sessionStorage.getItem("cart_selector").split(",");
    cart_selc.push(item);
    sessionStorage.setItem("cart_selector", cart_selc);
  }
}

function makeP(object, id){
  var i, paragraphItems;

  // Add appropriate number of list
  for ( i = 0; i < Object.keys(object).length; i++) {
    document.getElementById(id).appendChild(document.createElement('p'));
  }

  paragraphItems = document.getElementById(id).getElementsByTagName('p');

  for ( i = 0; i < Object.keys(object).length; i++ ) {
    paragraphItems[i].innerHTML = sessionStorage.getItem(Object.values(object)[i]);
  }
}

// Getting form fields data
function doForm(integer) {
  if(document.forms[0].checkValidity()){
    if (parseInt(integer) === 1 || parseInt(integer) === 0){
      // Use session storage to store input data
      sessionStorage.setItem(information[parseInt(integer)].Country, document.forms[0].country.value);
      sessionStorage.setItem(information[parseInt(integer)].Fullname, document.forms[0].fullname.value);
      sessionStorage.setItem(information[parseInt(integer)].Phonenumber, document.forms[0].telephone.value);
      sessionStorage.setItem(information[parseInt(integer)].Address1, document.forms[0].address[0].value);
      sessionStorage.setItem(information[parseInt(integer)].Address2, document.forms[0].address[1].value);
      sessionStorage.setItem(information[parseInt(integer)].City, document.forms[0].city.value);
      sessionStorage.setItem(information[parseInt(integer)].State, document.forms[0].state.value);
      sessionStorage.setItem(information[parseInt(integer)].Zip, document.forms[0].zip.value);
      if(parseInt(integer) === 1){
        location.assign("../payment");
      } else if(!document.querySelector('#bill').checked){
        location.assign("../billing");
      }
    } else{
      sessionStorage.setItem(information[parseInt(integer)].Name, document.forms[0].cardname.value);
      sessionStorage.setItem(information[parseInt(integer)].Number, document.forms[0].cardnumber.value);
      sessionStorage.setItem(information[parseInt(integer)].Expiry, document.forms[0].expirationdate.value);
      sessionStorage.setItem(information[parseInt(integer)].Cvv, document.forms[0].cvv.value);
      location.assign("../cart");
    }
    if(parseInt(integer) === 0 && document.querySelector('#bill').checked){
      sessionStorage.setItem(information[1].Country, document.forms[0].country.value);
      sessionStorage.setItem(information[1].Fullname, document.forms[0].fullname.value);
      sessionStorage.setItem(information[1].Phonenumber, document.forms[0].telephone.value);
      sessionStorage.setItem(information[1].Address1, document.forms[0].address[0].value);
      sessionStorage.setItem(information[1].Address2, document.forms[0].address[1].value);
      sessionStorage.setItem(information[1].City, document.forms[0].city.value);
      sessionStorage.setItem(information[1].State, document.forms[0].state.value);
      sessionStorage.setItem(information[1].Zip, document.forms[0].zip.value);
      location.assign("../payment");
    }
  }
}

function populate(){
  // get current user location
  // shipping
  if(location.pathname.split('/').at(-2) === "shipping") {
    if(typeof sessionStorage.getItem(information[0].Country) !== 'undefined'){
      document.forms[0].country.value = sessionStorage.getItem(information[0].Country);
      document.forms[0].fullname.value = sessionStorage.getItem(information[0].Fullname);
      document.forms[0].telephone.value = sessionStorage.getItem(information[0].Phonenumber);
      document.forms[0].address[0].value = sessionStorage.getItem(information[0].Address1);
      document.forms[0].address[1].value = sessionStorage.getItem(information[0].Address2);
      document.forms[0].city.value = sessionStorage.getItem(information[0].City);
      document.forms[0].state.value = sessionStorage.getItem(information[0].State);
      document.forms[0].zip.value = sessionStorage.getItem(information[0].Zip);
    }
  } else if(location.pathname.split('/').at(-2) === "billing"){// billing
    if(typeof sessionStorage.getItem(information[1].Country) !== 'undefined'){
      document.forms[0].country.value = sessionStorage.getItem(information[1].Country);
      document.forms[0].fullname.value = sessionStorage.getItem(information[1].Fullname);
      document.forms[0].telephone.value = sessionStorage.getItem(information[1].Phonenumber);
      document.forms[0].address[0].value = sessionStorage.getItem(information[1].Address1);
      document.forms[0].address[1].value = sessionStorage.getItem(information[1].Address2);
      document.forms[0].city.value = sessionStorage.getItem(information[1].City);
      document.forms[0].state.value = sessionStorage.getItem(information[1].State);
      document.forms[0].zip.value = sessionStorage.getItem(information[1].Zip);
    }
  } else if(location.pathname.split("/").at(-2) === "payment"){ // payment
    if(typeof sessionStorage.getItem(information[2].Name) !== 'undefined') {
      document.forms[0].cardname.value = sessionStorage.getItem(information[2].Name);
      document.forms[0].cardnumber.value = sessionStorage.getItem(information[2].Number);
      document.forms[0].expirationdate.value = sessionStorage.getItem(information[2].Expiry);
      document.forms[0].cvv.value = sessionStorage.getItem(information[2].Cvv);
    }
  }
}

function transform(){
  document.querySelector(".hide:not(button)").className += " translate";
}

function retransform(){
  document.querySelector(".hide:not(button)").className = document.querySelector(".hide:not(button)").className.split(" ")[0];
}

document.querySelectorAll("button.hide")[0].addEventListener("click", function(){
  transform();
});
document.querySelectorAll("button.hide")[1].addEventListener("click", function(){
  retransform();
});

populate();
retransform();
if(sessionStorage.getItem("cart_selector") === null){
  sessionStorage.setItem("cart_selector", []);
}

// I have been losing track of my javascript functions. I will slowly reorder the already made functions

// Sections

// Home
if(document.querySelector("main#home") !== null) {
  makeOL(products, 'product-list', default_selector);
  main.addEventListener('click', function(event) {
    for (counte = 0; counte < document.querySelector("ol").childElementCount; counte++) {
      if ( event.target === document.querySelector("ol li:nth-of-type("+(counte+1)+") button")) {
        cartFunction(counte);
      }
    }
  });
}

// Shipping
if(location.pathname.split('/').at(-2) === 'shipping') {
  main.addEventListener('click', function(event) {
    if (event.target === document.querySelector("#shipping form button")) {
      doForm(0);
      event.preventDefault();
    }
  });
}

// Billing
if(location.pathname.split('/').at(-2) === 'billing') {
  main.addEventListener('click', function(event) {
    if (event.target === document.querySelector("#billing form button[type='submit']")) {
      doForm(1);
      event.preventDefault();
    }

    if (event.target === document.querySelector("#address-populate")) {
      document.forms[0].country.value = sessionStorage.getItem(information[0].Country);
      document.forms[0].fullname.value = sessionStorage.getItem(information[0].Fullname);
      document.forms[0].telephone.value = sessionStorage.getItem(information[0].Phonenumber);
      document.forms[0].address[0].value = sessionStorage.getItem(information[0].Address1);
      document.forms[0].address[1].value = sessionStorage.getItem(information[0].Address2);
      document.forms[0].city.value = sessionStorage.getItem(information[0].City);
      document.forms[0].state.value = sessionStorage.getItem(information[0].State);
      document.forms[0].zip.value = sessionStorage.getItem(information[0].Zip);
    }
  });
}

// Payment
if(location.pathname.split('/').at(-2) === 'payment') {
  main.addEventListener('click', function(event) {
    if (event.target === document.querySelector("#payment form button")) {
      doForm(2);
      event.preventDefault();
    }
  });
}

// Cart
if(location.pathname.split('/').at(-2) === 'cart') {
  makeP(information[0], "shipping-address");
  makeP(information[1], "billing-address");
  makeP(information[2], "payment-info");
}
