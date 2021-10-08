// Select DOM elements
let password = document.querySelector('#password');
let refreshPw = document.querySelector('#reload');
let caps = document.querySelector('#caps');
let numbers = document.querySelector('#numbers');
let symbols = document.querySelector('#symbols');
let passwordLength = document.querySelector('#passwordLength');

// Listen password RANGE
var legth = 12;
passwordLength.addEventListener('change', () => {
    length = passwordLength.value;
    generatePassword(length);
    return length;
})


// Make the Button refresh the PW
refreshPw.addEventListener('click', () => {
    console.log(length);
    generatePassword(length);
});


function generatePassword(length) {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    password.value = retVal;
    return retVal;
}


// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------



// Listen all checkbox
caps.addEventListener('change', () =>{
    if (caps.checked){
        console.log('Caps checked');
    }
    else{
        console.log('Caps unchecked');
    }
});

numbers.addEventListener('change', () =>{
    if (numbers.checked){
        console.log('numbers checked');
    }
    else{
        console.log('numbers unchecked');
    }
});

symbols.addEventListener('change', () =>{
    if (symbols.checked){
        console.log('symbols checked');
    }
    else{
        console.log('symbols unchecked');
    }
});