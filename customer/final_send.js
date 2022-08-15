function dataconverter() {
  let xhr = new XMLHttpRequest();
  let url = "http://64.227.180.95:8081/company/save";

  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  var companyname = document.forms["companyForm"]["name"].value;

  var email = document.forms["companyForm"]["email"].value;

  var pass = document.forms["companyForm"]["password"].value;

  var phoneno = document.forms["companyForm"]["contactNo"].value;
  var addrss = document.forms["companyForm"]["address"].value;

  var comname = String.toString(companyname);
  var cemail = String.toString(email);
  var cpass = String.toString(pass);
  var cphoneno = String.toString(phoneno);
  var caddrss = String.toString(addrss);

  console.log("email : ", email);
  let texty = {
    name: companyname,
    email: email,
    password: pass,
    contactNo: phoneno,
    address: addrss,
  };

  //const obj = JSON.parse(text);

  xhr.send(JSON.stringify(texty));
  let response = xhr.responseJSON;
  console.log("response ", response);
  console.log("texty ", texty);
}
