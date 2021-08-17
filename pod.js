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

  const costPerBWPrint = 2.25;
  const costPerColPrint = 15;

  const costForLaminationFirst10Sheet = 200;
  const costForLaminationEveryAddlSheet = 2.5;

  const costForBindingFirst20Books = 500
  const costForBindingEveryAddlBooks = 10;

  const numberOfInnerPrints = Math.ceil(innerPages / 4) * quantity;
  const numberOfCoverPrints = Math.ceil(quantity / 2);

  const innerPrintCost = numberOfInnerPrints * costPerBWPrint;
  const coverPrintCost = numberOfCoverPrints * costPerColPrint;

  var laminationCost = costForLaminationFirst10Sheet;
  if (numberOfCoverPrints > 10) {
    const addl = numberOfCoverPrints - 10;
    laminationCost += addl * costForLaminationEveryAddlSheet;
  }

  var bindingCost = costForBindingFirst20Books;
  if (quantity > 20) {
    const addl = quantity - 20;
    bindingCost += addl * costForBindingEveryAddlBooks;
  }

  var jobCost = innerPrintCost
    + coverPrintCost
    + laminationCost
    + bindingCost;

  var eachBook = Math.round(jobCost / quantity);

  output = {
    "innerPrintCost": innerPrintCost,
    "coverPrintCost": coverPrintCost,
    "lamination": laminationCost,
    "bindingCost": bindingCost,
    "jobCost": jobCost,
    "eachBook": eachBook,
  };

  console.log(output);
  return false;
}