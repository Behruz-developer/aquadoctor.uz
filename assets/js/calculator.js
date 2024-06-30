var ideal = 7.4;
var kg = 75;

var clean = document.getElementById('clean');
var cube = document.getElementById('cube');
var cleanWant = document.getElementById('clean_want');
var btnCalculator = document.querySelector('.btn_calcul');
var btnClear = document.querySelector('.btn_clear');
var amount = document.querySelector('.amount');

var d = ideal; 

cleanWant.value = ideal;
cleanWant.addEventListener('input', () => updateCleanWant());

btnCalculator.addEventListener('click', () => calculator());

function updateCleanWant() {
    d = parseFloat(cleanWant.value);
}

function calculator() {
    var a = clean.value - d;
    var b = a * kg;
    var c = b * cube.value;

    var finalResult = Math.round((c / 1000) * 100) / 100;
    amount.innerHTML = finalResult;
    console.log(finalResult);
}
btnClear.addEventListener('click', () => {
    clean.value = 0
    cube.value = 0

})