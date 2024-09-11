function ActiveDeactiveButton() {
  var isCheck = document.getElementById("exampleCheck1");
  var button = document.getElementById("formSubmit");
  if (isCheck.checked) {
      button.removeAttribute("disabled");
} else {
    button.setAttribute("disabled","true");
  }
}

