/** @format */

function enableButton() {
  let textEnable = document.getElementById("writeComment").value;
  let buttonMoreInfo = document.getElementById("btn");
  if (textEnable !== "") {
    buttonMoreInfo.removeAttribute("disabled");
  } else {
    buttonMoreInfo.disabled = "true";
  }
}

/* function starColor() {
  let starChange = (document.querySelectorAll("blackStar").src = "star.svg");
  starChange.classList.add("starColorChange");
} */
