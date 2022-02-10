
// ! deposite event handler
document.getElementById('deposite-button').addEventListener('click', function () {
  //! value of input
  const depositeField = document.getElementById('deposite-input');
  const newDeposite = depositeField.value;
  // ! Deposited ammount section
  const previousDeposite = document.getElementById('previous-deposited');
  const finalDeposite=  parseFloat(previousDeposite.innerText)+parseFloat(newDeposite);
  // ! deposite add to Total amount
  const previousTotal = document.getElementById('previous-total');
  const finalTotal = parseFloat(previousTotal.innerText) + parseFloat(newDeposite);
 //! value passed to Deposite section
  previousDeposite.innerText = finalDeposite;
  //! Final value to total
  previousTotal.innerText = finalTotal;
  // ! Clear deposite input
  depositeField.value = '';
});
// ! deposite event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
  // ! Withdraw input
  const withdrawField = document.getElementById('withdraw-input');
  const newWithdraw = withdrawField.value;
  // ! Withdraw ammount section
  const previousWithdraw = document.getElementById('previous-Withdrew');
  const finalWithdraw = parseFloat(previousWithdraw.innerText) + parseFloat(newWithdraw);
// ! withdraw substruction to total
  const previousTotal = document.getElementById('previous-total');
  const finalTotal = parseFloat(previousTotal.innerText) - parseFloat(newWithdraw);
 //! value passed to Withdraw section
  previousWithdraw.innerText = finalWithdraw;
  // ! Final ammount after withdraw
  previousTotal.innerText = finalTotal;
  // ! Clear withdraw input
  withdrawField.value = '';  
});
//! Return to login PAGE
document.getElementById('return-button').addEventListener('click', function () {
  window.location.href = 'index.html';
});
