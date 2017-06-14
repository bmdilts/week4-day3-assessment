// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {

  'use strict';

  // Your Code Goes Here
  fetch('https://randomuser.me/api/?results=12')
    .then(function(response){
      return response.json();
    })

    .then(function(json){
      console.log(json);
      for(var i = 0; i < 12; i++){
        var flexnum = ("flex_container" + i);
        console.log(flexnum);
        console.log(json);
        let flex_container = document.createElement("DIV");
        flex_container.setAttribute("id", flexnum)
        document.getElementById("customers").appendChild(flex_container);                                                                    // Create a <div> element
        let pic = document.createElement("IMG");
        console.log(json[i]);                           // Create a text node
        pic.setAttribute("src", json[i].picture.medium);                                                                    // Append the text to <p>
        document.getElementById(flexnum).appendChild(pic);           // Append <p> to <div> with id="myDIV"

        let name_div = document.createElement("DIV");                       // Create a <div> element
        let firstName = document.createTextNode(json[i].name.first)
        let lastName = document.createTextNode(json[i].name.last);      // Create a text node
        name_div.appendChild(firstName);
        name_div.appendChild(lastName);                                          // Append the text to <p>
        document.getElementById("flex_container" + i).appendChild(name_div);
        let email = document.createTextNode(json[i].email);
        document.getElementById("flex_container" + i).appendChild(email);
        let location_div = document.createElement("DIV");                       // Create a <div> element
        let street = document.createTextNode(json[i].location.street)
        let city = document.createTextNode(json[i].location.city);
        let state = document.createTextNode(json[i].location.state);
        let postcode = document.createTextNode(json[i].location.postcode);     // Create a text node
        location_div.appendChild(street);
        location_div.appendChild(city);
        location_div.appendChild(state);
        location_div.appendChild(postcode);                                         // Append the text to <p>
        document.getElementById("flex_container" + i).appendChild(location_div);
        let value = document.createTextNode(json[i].id.value);
        document.getElementById("flex_container" + i).appendChild(value);
      }
    });


})();
