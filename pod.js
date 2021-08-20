function getBookEstimate() {
  const bookSize = document.getElementById("bookSize").value;
  const innerPages = document.getElementById("innerPages").value;
  const innerPaper = document.getElementById("innerPaper").value;
  const coverPages = document.getElementById("coverPages").value;
  const coverBoard = document.getElementById("coverBoard").value;
  const finishing = document.getElementById("finishing").value;
  const quantity = document.getElementById("quantity").value;

  input = {
    "type": "book",
    "bookSize": bookSize,
    "innerPages": parseInt(innerPages),
    "innerPaper": innerPaper,
    "coverPages": coverPages,
    "coverBoard": coverBoard,
    "finishing": finishing,
    "quantity": parseInt(quantity),
  };

  getEstimate(input, (result) => {
    console.log(result);
    const totalStr = `Total Cost: ${toTotalCurrency(result.total)}/-`;
    const rateStr = `Each Book: ${toRateCurrency(result.rate)}`;
    document.getElementById("result").innerText = totalStr + "\n" + rateStr;
  });

  return false;
}

function toTotalCurrency(number) {
  return number.toLocaleString('en-IN', { maximumFractionDigits: 0, style: "currency", currency: "INR" });
}

function toRateCurrency(number) {
  return number.toLocaleString('en-IN', { maximumFractionDigits: 2, minimumFractionDigits: 2, style: "currency", currency: "INR" });
}

function getCalendarEstimate() {
  const calendarSize = document.getElementById("calendarSize").value;
  const sheets = document.getElementById("sheets").value;
  const paper = document.getElementById("paper").value;
  const printSides = document.getElementById("printSides").value;
  const binding = document.getElementById("binding").value;
  const quantity = document.getElementById("quantity").value;

  input = {
    "type": "calendar",
    "calendarSize": calendarSize,
    "sheets": parseInt(sheets),
    "paper": paper,
    "printSides": printSides,
    "binding": binding,
    "quantity": parseInt(quantity),
  };

  getEstimate(input, (result) => {
    console.log(result);
    const totalStr = `Total Cost: ${toTotalCurrency(result.total)}/-`;
    const rateStr = `Each Rate: ${toRateCurrency(result.rate)}`;
    document.getElementById("result").innerText = totalStr + "\n" + rateStr;
  });

  return false
}

function getEstimate(input, callback) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var data = JSON.parse(this.responseText);
    callback(data);
  }
  xhttp.open("POST", "http://localhost:5001/vstpress-site2/us-central1/getWOCEstimate");
  // xhttp.open("POST", "https://us-central1-vstpress-site2.cloudfunctions.net/getWOCEstimate");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify(input));
}

function clearOutput() {
  document.getElementById("result").innerText = "";
}