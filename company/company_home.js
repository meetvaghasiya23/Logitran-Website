function driverList() {
  var driver = document.getElementById("driver");
  var vehicle = document.getElementById("vehicle");

  driver.style.display = "none";
  vehicle.style.display = "none";

  fetch("http://64.227.180.95:8081/driver/getList")
    .then(function (response) {
      // The API call was successful!
      return response.json();
    })
    .then(function (data) {
      // This is the JSON from our response
      console.log(data);

      /*myObj = JSON.parse(data); */
      var textyy =
        "<table class='styled-table' id='table' border='1'><thead><tr><th>Driver Name</th><th>Driver Email</th><th>Contact No.</th><th>Assign</th></tr></thead>";
      for (var i = 0; i < data.length; i++) {
        textyy =
          textyy +
          '<tr class="active-row"><td>' +
          data[i].name +
          "</td><td>" +
          data[i].email +
          "</td><td>" +
          data[i].contactNo +
          "</td>" +
          '<td>&nbsp;&nbsp;&nbsp;<button class="button-26" id="' +
          data[i].companyId +
          '" >Assign</button></td></tr>';
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

function vehicalList() {
  var driver = document.getElementById("driver");
  var vehicle = document.getElementById("vehicle");

  driver.style.display = "none";
  vehicle.style.display = "none";
  fetch("http://64.227.180.95:8081/vehicle/getList")
    .then(function (response) {
      // The API call was successful!
      return response.json();
    })
    .then(function (data) {
      // This is the JSON from our response
      console.log(data);

      /*myObj = JSON.parse(data); */
      var textyy =
        "<table class='styled-table' id='table' border='1'><thead><tr><th>Vehicle No.</th><th>Vehicle Type</th><th>vehicle Capacity</th><th>Assign</th></tr></thead>";
      for (var i = 0; i < data.length; i++) {
        textyy =
          textyy +
          '<tr class="active-row"><td>' +
          data[i].vehicleNo +
          "</td><td>" +
          data[i].vehicleType +
          "</td><td>" +
          data[i].capacity +
          "</td>" +
          '<td>&nbsp;&nbsp;&nbsp;<button class="button-26" id="' +
          data[i].vehicleId +
          '" >Assign</button></td></tr>';
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

// --------------------------------------------------------------------------------Add Driver---------------------------------------------------------------------------------

function openDriverForm() {
  let driver = document.getElementById("driver");
  console.log(driver);

  let table = document.getElementById("table");
  if (table) {
    table.style.display = "none";
  }

  driver.style.display = "block";
  var vehicle = document.getElementById("vehicle");

  vehicle.style.display = "none";
}

function addDriver() {
  let xhr = new XMLHttpRequest();
  let url = "http://64.227.180.95:8081/driver/save";

  xhr.open("POST", url, false);
  xhr.setRequestHeader("Content-Type", "application/json");

  var driverName = document.forms["driverform"]["name"].value;
  console.log(driverName);

  //customer email
  var driverEmail = document.forms["driverform"]["email"].value;
  console.log(driverEmail);

  //customer mobileNumber
  var mobileNo = document.forms["driverform"]["mobileNo"].value;
  console.log(mobileNo);

  let data = {
    name: driverName,
    email: driverEmail,
    contactNo: mobileNo,
    companyId: 16,
  };
  console.log(JSON.stringify(data));
  xhr.send(JSON.stringify(data));
  let reaponse = xhr.responseJSON;

  console.log(reaponse);
}

// --------------------------------------------------------------------------------Add Vehicle-----------------------------------------------------------------------------------------------------

function openVehicleForm() {
  let vehicle = document.getElementById("vehicle");
  console.log(vehicle);

  vehicle.style.display = "block";
  let driver = document.getElementById("driver");
  let table = document.getElementById("table");
  if (table) {
    table.style.display = "none";
  }
  console.log(table);
  driver.style.display = "none";
}

function addVehicle() {
  let xhr = new XMLHttpRequest();
  let url = "http://64.227.180.95:8081/vehicle/save";

  xhr.open("POST", url, false);
  xhr.setRequestHeader("Content-Type", "application/json");

  var vehicle_no = document.forms["vehicleForm"]["vehicleNo"].value;
  console.log(vehicle_no);

  //customer email
  var vehicle_type = document.forms["vehicleForm"]["vehicleType"].value;
  console.log(vehicle_type);

  //customer mobileNumber
  var vehicle_cap = document.forms["vehicleForm"]["capacity"].value;
  console.log(vehicle_cap);

  vehicle_cap = parseInt(vehicle_cap);

  let data = {
    vehicleNo: vehicle_no,
    vehicleType: vehicle_type,
    capacity: vehicle_cap,
    companyId: 16,
  };
  console.log(JSON.stringify(data));
  xhr.send(JSON.stringify(data));
  let reaponse = xhr.responseJSON;
  let vehicle = document.getElementById("vehicle");
  vehicle.style.display = "none";
  console.log(reaponse);
}
