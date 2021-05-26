
function getSIP() {
  var money = document.getElementById("myRange");
  var rateOfInt = document.getElementById("myRate");
  var time = document.getElementById("myTime");
  var output = document.getElementById("demo");
  var output1 = document.getElementById("interest");
  var output2 = document.getElementById("timeP");
  var amtInv = document.getElementById("amtInv");
  var lumpsum = document.getElementById("lumpsum");
  var sip = document.getElementById("sip");
  const estRet = document.getElementById("estRet");
  const totalValue = document.getElementById("totalValue");
  output.innerHTML = money.value;
  output1.innerHTML = rateOfInt.value;
  output2.innerHTML = time.value;
  let p = money.value * 1;
  let n = time.value * 12;
  let i = rateOfInt.value / (100 * 12);
  // console.log(i)
  amtInv.innerText = p * n;
  var total = (p * ((1 + i) ** n - 1) / i) * (1 + i);
  totalValue.innerText = Math.round(total);
  estRet.innerText = Math.round(total) - (p * n);



  var ctxP = document.getElementById("pieChart").getContext('2d');
  var myPieChart = new Chart(ctxP, {
    type: 'doughnut',
    data: {
      labels: ["Amt. Invested", "Total Value"],
      datasets: [{
        data: [Math.round(total), p * n],
        backgroundColor: ["#5367ff", "#00d09c"],
        // hoverBackgroundColor: ["#FF5A5E", "#5AD3D1"]
      }]
    },
    options: {
      responsive: true
    }
  });
}

function getLumpSum() {
  var amount = document.getElementById('amount');
  amount.innerText = 'Total Investment';
  var money = document.getElementById("myRange");
  var rateOfInt = document.getElementById("myRate");
  var time = document.getElementById("myTime");
  var output = document.getElementById("demo");
  var output1 = document.getElementById("interest");
  var output2 = document.getElementById("timeP");
  var amtInv = document.getElementById("amtInv");
  var lumpsum = document.getElementById("lumpsum");
  var sip = document.getElementById("sip");
  const estRet = document.getElementById("estRet");
  const totalValue = document.getElementById("totalValue");
  output.innerHTML = money.value;
  output1.innerHTML = rateOfInt.value;
  output2.innerHTML = time.value;
  let p = money.value * 1;
  let n = time.value * 1;
  let i = rateOfInt.value*1;
  // console.log(i)
  amtInv.innerText = p;
  // var total = (p * ((1 + i) ** n - 1) / i) * (1 + i);    
  var total = Math.round(Math.pow(1 + i / 100, n) * p);    
  totalValue.innerText = total;
  estRet.innerText = Math.round(total)-p;



  var ctxP = document.getElementById("pieChart").getContext('2d');
  var myPieChart = new Chart(ctxP, {
    type: 'doughnut',
    data: {
      labels: ["Amt. Invested", "Total Value"],
      datasets: [{
        data: [Math.round(total), p * n],
        backgroundColor: ["#5367ff", "#00d09c"],
        // hoverBackgroundColor: ["#FF5A5E", "#5AD3D1"]
      }]
    },
    options: {
      responsive: true
    }
  });
}

function calculate() {
  if (lumpsum.checked == true) {
    getLumpSum();
    console.log("calculate is running");
  } 
  else {
    getSIP();
    console.log("calculate is running in else");
    
  }
}
calculate();