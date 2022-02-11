
// //! value of input Function
function inputFields(deposit) {
  const inputField = document.getElementById(deposit);
  const newInput = inputField.value;
  //! Clear  input
  inputField.value = '';
  if (newInput > 0) {
    return newInput;
  }
  else {
    return 0;
  }
    
};

function getCurrentBalance() {
  const currentTotal = document.getElementById('previous-total').innerText;
  console.log(parseFloat(currentTotal));
  return parseFloat(currentTotal);
  
}

//! Value of Deposit and withdraw ammount Function 
function summery(prevData, newInputedData) {
  const previousDeposite = document.getElementById(prevData);
 
  if (newInputedData > 0) {
    const finalDeposite=  parseFloat(previousDeposite.innerText)+parseFloat(newInputedData);
   previousDeposite.innerText = finalDeposite;
  }
  else {
    alert("WRONG INPUT!");
  }
};
// ! final total Function
function total(prevTotal,newInputedData,isAdd) {
  const previousTotal = document.getElementById(prevTotal);
  if (isAdd == true) {
    const finalTotal = parseFloat(previousTotal.innerText) + parseFloat(newInputedData);
    previousTotal.innerText = finalTotal;
  }
  else {
    if (newInputedData > parseFloat(previousTotal.innerText)) {
      alert("Insufficient Balance");
    }
    else {
      const finalTotal = parseFloat(previousTotal.innerText) - parseFloat(newInputedData);
      
      previousTotal.innerText = finalTotal;

    }
  }
      
};
// ! deposite event handler
document.getElementById('deposite-button').addEventListener('click', function () {
// //! value of input
const newDeposite = inputFields('deposite-input');
// ! Deposited ammount section
const finalDeposite = summery('previous-deposited', newDeposite);
// ! final total
const finalTotal = total('previous-total', newDeposite,true);
});
// ! withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
// ! Withdraw input
  const newWithdraw = inputFields('withdraw-input');
// ! Withdraw ammount section
  if (getCurrentBalance() > newWithdraw) {
     const finalWithdraw = summery('previous-Withdrew', newWithdraw);
  }
// !final total
  const finalTotal = total('previous-total', newWithdraw, false); 
});
//! Return to login PAGE
document.getElementById('return-button').addEventListener('click', function () {
  window.location.href = 'index.html';
});
