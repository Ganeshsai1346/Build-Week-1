/** @format */

function enable() {
  let checkBoxEnable = document.getElementById("checkBox");
  let buttonProceed = document.getElementById("btn");
  if (checkBoxEnable.checked) {
    buttonProceed.removeAttribute("disabled");
  } else {
    buttonProceed.disabled = "true";
  }
}

enable();
