var data = {
  datasets: [
    {
      data: [67.7, 33.3],
      backgroundColor: ["#00FFFF", "#D20094"],
    },
  ],
};
var promisedDeliveryChart = new Chart(
  document.getElementById("myChart"),
  {
    type: "doughnut",
    data: data,
    options: {
      cutoutPercentage: 70,
      rotation: 120,

    },
  }
);