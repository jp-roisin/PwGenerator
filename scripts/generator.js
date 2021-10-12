// Select DOM elements
let password = document.querySelector('#password');
let copy = document.querySelector('#copy');
let refreshPw = document.querySelector('#reload');
let capsCheckbox = document.querySelector('#caps');
let numbersCheckbox = document.querySelector('#numbers');
let symbolsCheckbox = document.querySelector('#symbols');
let passwordLength = document.querySelector('#passwordLength');
let message = document.querySelector('#message');

// Checkbox Var
var caps = false;
var numbers = false;
var symbols = false;

// Listen password RANGE
passwordLength.addEventListener('change', () => {
    length = passwordLength.value;
    generatePassword(length, caps, numbers, symbols);
    return length;
})

// Listen all 3 checkbox
capsCheckbox.addEventListener('change', () =>{
    if (capsCheckbox.checked){
        caps = true;
        generatePassword(length, caps, numbers, symbols);
    }
    else{
        caps = false;
        generatePassword(length, caps, numbers, symbols);
    }
});

numbersCheckbox.addEventListener('change', () =>{
    if (numbersCheckbox.checked){
        numbers = true;
        generatePassword(length, caps, numbers, symbols);
    }
    else{
        numbers = false;
        generatePassword(length, caps, numbers, symbols);
    }
});

symbolsCheckbox.addEventListener('change', () =>{
    if (symbolsCheckbox.checked){
        symbols = true;
        generatePassword(length, caps, numbers, symbols);
    }
    else{
        symbols = false;
        generatePassword(length, caps, numbers, symbols);
    }
});

// ANIMATE REFRESH BUTTON
let count = 0;
refreshPw.addEventListener('click', () => {
    count++;
    degrees = count * 180;
    refreshPw.style.transform = 'rotate(' + degrees + 'deg)';
    refreshPw.style.transition = '.3s';
});

// COPY BUTTON
copy.addEventListener('click', () => {
    copyPWToClipBoard(password.value);
    displayMessage();
})

// Make the Button refresh the PW
refreshPw.addEventListener('click', () => {
    generatePassword(length, caps, numbers, symbols);
});

// FUNCTION GENERATE PASSWORD
function generatePassword(length, caps, numbers, symbols) {
    let charset = "abcdefghijklmnopqrstuvwxyz",
        retVal = "";

    if (!length || length == 0){
        length = 12;
    }
    if (caps){
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (numbers){
        charset += "01234567890123456789";
    }
    if (symbols){
        charset += "!#$%&'()*+,-./:;<=>?@[\\]\"^_`{|}~";
    }
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    password.value = retVal;
    return retVal;
}


// COPY THE PASSWORD TO CLIP BOARD
function copyPWToClipBoard(passwordValue){
    navigator.clipboard.writeText(passwordValue).then(function() {
        console.log('Async: Copying to clipboard was successful!');
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
}

// Display the message
function displayMessage(){
    message.style.display = 'inherit';
    setTimeout(() => {message.style.display = 'none';}, 3500);
}
