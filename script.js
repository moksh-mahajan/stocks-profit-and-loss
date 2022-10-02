const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const submitButton = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");

submitButton.addEventListener("click", submitHandler);

function submitHandler() {
  const initial = Number(initialPrice.value);
  const qty = Number(stocksQuantity.value);
  const current = Number(currentPrice.value);
  if (initial && qty && current) {
    calculateProfitAndLoss(initial, qty, current);
  } else {
    alert("Please enter all the fields!");
  }
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    const loss = quantity * (initial - current);
    const lossPercentage = (loss / (initial * quantity)) * 100;
    showOutput(
      `You have made a loss of ${loss} and percentage is ${lossPercentage.toFixed(
        2
      )}%`
    );
  } else if (initial == current) {
    showOutput("Neither profit nor loss!");
  } else {
    const profit = quantity * (current - initial);
    const profitPercentage = (profit / (initial * quantity)) * 100;
    showOutput(
      `You have made a profit of ${profit} and percentage is ${profitPercentage.toFixed(
        2
      )}%`
    );
  }
}

function showOutput(message) {
  outputBox.innerHTML = message;
}
