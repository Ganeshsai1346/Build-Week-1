// let questions = 0;
// let correctAn = 0;
// let wrongAns = 33.3;

let data = {
  datasets: [
    {
      data: [correctAn, wrongAns],
      backgroundColor: ["#00FFFF", "#D20094"],
    },
  ],
};
let promisedDeliveryChart = new Chart(document.getElementById("myChart"), {
  type: "doughnut",
  data: data,
  options: {
    cutoutPercentage: 70,
    rotation: 120,
  },
});

let btnRateUs = document.querySelector("#rateUS");

btnRateUs.addEventListener(
  "click",
  () => (btnRateUs.style.backgroundColor = "#00FFFF")
);
