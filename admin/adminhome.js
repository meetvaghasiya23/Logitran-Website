function companies_list() {
  var body = document.getElementById("body");

  body.style.background = "none";

  fetch("http://64.227.180.95:8081/company/getList")
    .then(function (response) {
      // The API call was successful!
      return response.json();
    })
    .then(function (data) {
      // This is the JSON from our response
      console.log(data);

      /*myObj = JSON.parse(data); */
      var textyy =
        "<table class='styled-table' border='1'><thead><tr><th>Company Name</th><th>Company Email</th><th>Contact No.</th><th>Address</th><th>Manage</th></tr></thead>";
      for (var i = 0; i < data.length; i++) {
        textyy =
          textyy +
          '<tr class="active-row"><td>' +
          data[i].name +
          "</td><td>" +
          data[i].email +
          "</td><td>" +
          data[i].contactNo +
          "</td><td>" +
          data[i].address +
          '</td><td>&nbsp;&nbsp;&nbsp;<button class="button-26" id="' +
          data[i].companyId +
          '" >Manage</button></td></tr>';
      }
      textyy = textyy + "</table>";
      document.getElementById("demo").innerHTML = textyy;
      console.log("Got the data");
      console(textyy);

      //console.log(data);
    })
    .catch(function (err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });
}

function customerlist() {
  body.style.background = "none";
  fetch("http://64.227.180.95:8081/customer/getList")
    .then(function (response) {
      // The API call was successful!
      return response.json();
    })
    .then(function (data) {
      // This is the JSON from our response
      console.log(data);

      /*myObj = JSON.parse(data); */
      var textyy =
        "<table class='styled-table' border='1'><thead><tr><th>Customer Name</th><th>Customer Email</th><th>Contact No.</th><th>Address</th><th>Manage</th></tr></thead>";
      for (var i = 0; i < data.length; i++) {
        textyy =
          textyy +
          '<tr class="active-row"><td>' +
          data[i].name +
          "</td><td>" +
          data[i].email +
          "</td><td>" +
          data[i].contactNo +
          "</td><td>" +
          data[i].address +
          '</td><td>&nbsp;&nbsp;&nbsp;<button class="button-26" id="' +
          data[i].companyId +
          '" >Manage</button></td></tr>';
      }
      textyy = textyy + "</table>";
      document.getElementById("demo").innerHTML = textyy;
      console.log("Got the data");
      console(textyy);

      //console.log(data);
    })
    .catch(function (err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });
}
