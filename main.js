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
      for(var i = 0; i < 12; i++){
        var flexnum = ("flex_container" + i);
        var result = json.results;

        let flex_container = document.createElement("DIV");
        flex_container.setAttribute("id", flexnum)
        document.getElementById("customers").appendChild(flex_container);
                                                                            // Create a <div> element
        let pic = document.createElement("IMG");
        pic.setAttribute("src", result[i].picture.medium);                                                                    // Append the text to <p>
        document.getElementById(flexnum).appendChild(pic);           // Append <p> to <div> with id="myDIV"

        let name_div = document.createElement("DIV");
        name_div.setAttribute("class", "name");                       // Create a <div> element
        let firstName = document.createTextNode(result[i].name.first + " ")
        let lastName = document.createTextNode(result[i].name.last);      // Create a text node
        name_div.appendChild(firstName);
        name_div.appendChild(lastName);                                          // Append the text to <p>
        document.getElementById(flexnum).appendChild(name_div);
        let email = document.createElement("P")
        email.textContent = (result[i].email);
        email.setAttribute("id", "email");
        document.getElementById(flexnum).appendChild(email);
        let location_div = document.createElement("DIV");
        location_div.setAttribute("id", "location");                      // Create a <div> element
        let street = document.createTextNode(result[i].location.street + " ");
        let addressLine2 = document.createElement("DIV");
        let addressLine3 = document.createElement("DIV");
        let city = document.createTextNode(result[i].location.city + ", ");
        let state = document.createTextNode(result[i].location.state + " ");
        let postcode = document.createTextNode(result[i].location.postcode);
        location_div.appendChild(street);
        addressLine2.appendChild(city);
        addressLine2.appendChild(state);
        addressLine2.appendChild(postcode);
        location_div.appendChild(addressLine2);                                        // Append the text to <p>
        document.getElementById(flexnum).appendChild(location_div);
        let value = document.createElement("P");
        value.textContent = (result[i].id.value);
        value.setAttribute("id", "id");
        document.getElementById(flexnum).appendChild(value);
      }
    });


})();
