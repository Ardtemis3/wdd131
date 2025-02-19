const submit = document.querySelector("#card");
submit.addEventListener("submit", submitHandler);






function displayError(msg){
    document.querySelector('#errorMsg').innerHTML = msg;
}
function submitHandler(event){
    event.preventDefault();
    let errorMsg = '';
    const cardNumber = this.inputNumber.value;
    let yearStr = this.year.value;
    let monthStr = this.month.value;
    let year = parseInt(yearStr);
    let month = parseInt(monthStr);
    const currentYear = new Date().getFullYear() - 2000;
    const currentMonth = new Date().getMonth() + 1;
    console.log(cardNumber);
    displayError('');
    if (isNaN(cardNumber)){
        errorMsg += 'Card number is invalid.\n'
    }

    if ((year >= currentYear && month >= currentMonth) || (year > currentYear && month < currentMonth)){
        errorMsg += '';
    }
    else {
        errorMsg += ' Card is expired.'
    }
    displayError(errorMsg)
}

