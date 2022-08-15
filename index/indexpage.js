function login() {
  var username = document.forms["index_from"]["email"].value;
  console.log(username);

  //user email
  var user_password = document.forms["index_from"]["password"].value;
  console.log(password);

  let user_detail = {
    email: username,
    password: user_password,
  };

  fetch("http://64.227.180.95:8081/api/login-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user_detail),
  })
    .then(function (response) {
      // The API call was successful!
      return response.json();
    })
    .then(function (data) {
      // This is the JSON from our response
      // console.log(data[0].re

      console.log(data.result);

      if (data.result == "Customer") {
        window.open("../customer/homepage.html", "_self");
      } else if (data.result == "Logistic Company") {
        window.open("../company/company_home.html", "_self");
      } else if (data.result == "Admin") {
        window.open("../admin/adminhome.html", "_self");
      } else {
        console.log("User Does not exist");
      }
    })
    .catch(function (err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });
}
