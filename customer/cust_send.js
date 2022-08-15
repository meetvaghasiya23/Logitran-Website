function dataconverter() {
  let xhr = new XMLHttpRequest();
  let url = "http://64.227.180.95:8081/customer/save";
  // let url = "http://localhost:8081/customer/save";

  xhr.open("POST", url, false);
  xhr.setRequestHeader("Content-Type", "application/json");

  var custname = document.forms["customerform"]["name"].value;
  console.log(custname);

  //customer email
  var custemail = document.forms["customerform"]["email"].value;
  console.log(custemail);

  //customer mobileNumber
  var mobileNo = document.forms["customerform"]["mobileNo"].value;
  console.log(mobileNo);

  var pass = document.forms["customerform"]["password"].value;
  console.log(pass);

  var custaddress = document.forms["customerform"]["address"].value;
  console.log(custaddress);

  let data = {
    name: custname,
    email: custemail,
    password: pass,
    contactNo: mobileNo,
    address: custaddress,
  };
  console.log(JSON.stringify(data));
  xhr.send(JSON.stringify(data));
  let reaponse = xhr.responseJSON;

  console.log(reaponse);
}

console.log("test");
