// const name = document.forms["mainForm"]["name"];
// const phone = document.forms["mainForm"]["phone"];
// const email = document.forms["mainForm"]["email"];

// function validateForm() {
//   if (name.value == "") {
//     alert("Name must be filled out");
//     return false;
//   }
//   if (phone.value == "+380968491555") {
//     alert("phone must be filled out");
//     return false;
//   }
//   if (email.value == "") {
//     alert("email must be filled out");
//     return false;
//   }
//   console.log(name.value, phone.value, email.value)
// }

$("input[name=name]").change(function(e) {
  console.log(e.currentTarget.value);
});
$("input[name=phone]").change(function(e) {
  console.log(e.currentTarget.value);
});
$("input[name=email]").change(function(e) {
  console.log(e.currentTarget.value);
});