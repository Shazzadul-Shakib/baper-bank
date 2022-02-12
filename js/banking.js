
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
//! wrong input function 
function errorMessage(wbd,win) {
  const wrongMsg = document.getElementById(wbd);
  const fieldinput = document.getElementById(win);
  wrongMsg.style.display = "block";
  fieldinput.addEventListener('click', function () {
    document.getElementById(wbd).style.display = "none";
  })
  wrongMsg.addEventListener('click', function () {
    document.getElementById(wbd).style.display = "none";
  })
};


// !success message function
function success(wbd, fd, sm,df) {
  const succesMsg = document.getElementById(wbd);
  const inputedAmount = fd;
  const successInputmsg = document.getElementById(sm);
  successInputmsg.innerText = inputedAmount;
  succesMsg.style.display = "block";
  succesMsg.addEventListener("click", function () {
    document.getElementById(wbd).style.display = "none";
  })
  document.getElementById(df).addEventListener('click', function () {
    document.getElementById(wbd).style.display = "none";
  })
};




function getCurrentBalance() {
  const currentTotal = document.getElementById('previous-total').innerText;
  return parseFloat(currentTotal);
  
}

//! Value of Deposit and withdraw ammount Function 
function summery(prevData, newInputedData) {
  const previousDeposite = document.getElementById(prevData);
 
  if (newInputedData > 0) {
    const finalDeposite=  parseFloat(previousDeposite.innerText)+parseFloat(newInputedData);
    previousDeposite.innerText = finalDeposite;
    //Succes message
    if (prevData == 'previous-deposited') {
      success('right-input-d',finalDeposite ,'right-amount-d',"deposite-input"); 
    }
    else {
      success('right-input-w',finalDeposite ,'right-amount-w',"withdraw-input");
    }
  }
  else {
    if (prevData == 'previous-deposited') {
      errorMessage('wrong-input-d',"deposite-input"); 
    }
    else {
      errorMessage('wrong-input-w',"withdraw-input");
    }
    
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
      errorMessage('wrong-input-i',"withdraw-input");
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
  if (getCurrentBalance() >= newWithdraw) {
     const finalWithdraw = summery('previous-Withdrew', newWithdraw);
  }
// !final total
  const finalTotal = total('previous-total', newWithdraw, false); 
});
//! Return to login PAGE
document.getElementById('return-button').addEventListener('click', function () {
  window.location.href = 'index.html';
});
