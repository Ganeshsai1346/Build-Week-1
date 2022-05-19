/** @format */

function enableButton() {
  let textEnable = document.getElementById("writeComment").value;
  let buttonMoreInfo = document.getElementById("btn");
  let linkActive = document.getElementById("link");
  if (textEnable !== "") {
    buttonMoreInfo.removeAttribute("disabled");
    linkActive.removeAttribute("disabled");
    linkActive.href = "https://epicode.com/en/?utm_source=strive.school";
  } else {
    buttonMoreInfo.disabled = "true";
    linkActive.disabled = "true";
  }
}

/* function starColor() {
  let starChange = (document.querySelectorAll("blackStar").src = "star.svg");
  starChange.classList.add("starColorChange");
} */
