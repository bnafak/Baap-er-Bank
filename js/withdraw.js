document.getElementById('btn-withdraw').addEventListener('click',  function(){
                    
const withdrawField = document.getElementById('withdraw-field');
const newWithdrawAmountString = withdrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString);

// step 3 :
const withdraTotalElement = document.getElementById('withdraw-total');
const previousWithdrawTotalString = withdraTotalElement.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

// step 4 :

const currentWithdrawTotal= previousWithdrawTotal + newWithdrawAmount;
withdraTotalElement.innerText = currentWithdrawTotal;

// step 5:
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
console.log('previousBalanceTotal');
// step 6:
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
newBalanceTotal.innerText = newBalanceTotal;
balanceTotalElement.innerText=newBalanceTotal;
// step 7:

withdrawField.value = '';

})
         



