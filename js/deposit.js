// console.log('deposit.js');
// 1. step one " 1 Add event listener
document.getElementById("btn-deposit").addEventListener("click", function () {
  // console.log('deposit button clicked')

  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;

  const previousDepositTotal = parseFloat(previousDepositTotalString);
  // console.log(previousDepositTotal);

  const currentDepositTotal = previousDepositTotal + newDepositAmount;

  depositTotalElement.innerText = currentDepositTotal;
  

  // Balance portion 

  const balanceTotalElement = document.getElementById('balance-total');

  const previousBalanceTotalString = balanceTotalElement.innerText;

  const priviousBalanceTotal = parseFloat(previousBalanceTotalString);

  const currentBalanceTotal = priviousBalanceTotal + newDepositAmount;

  balanceTotalElement.innerText = currentBalanceTotal; 

  depositField.value = "";
});
