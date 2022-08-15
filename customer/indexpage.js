function login() {
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
