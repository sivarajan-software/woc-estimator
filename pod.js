function getEstimate() {
  const bookSize = document.getElementById("bookSize").value;
  const innerPages = document.getElementById("innerPages").value;
  const innerPaper = document.getElementById("innerPaper").value;
  const coverPages = document.getElementById("coverPages").value;
  const coverBoard = document.getElementById("coverBoard").value;
  const finishing = document.getElementById("finishing").value;
  const quantity = document.getElementById("quantity").value;

  input = {
    "bookSize": bookSize,
    "innerPages": parseInt(innerPages),
    "innerPaper": innerPaper,
    "coverPages": coverPages,
    "coverBoard": coverBoard,
    "finishing": finishing,
    "quantity": parseInt(quantity),
  };

  output = {};

  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var data = JSON.parse(this.responseText);
    document.getElementById("result").innerText = "Total Cost: Rs. " + data.jobCost + "\nEach Book: Rs. " + data.eachBook;
    console.log(output);
  }
  // xhttp.open("POST", "http://localhost:5001/vstpress-site2/us-central1/getWOCEstimate");
  xhttp.open("POST", "https://us-central1-vstpress-site2.cloudfunctions.net/getWOCEstimate");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify(input));

}

function clearOutput() {
  document.getElementById("result").innerText = "";
}