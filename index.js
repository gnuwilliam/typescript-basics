var button = document.querySelector('input[type=submit]');
var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    console.log('clicked');
    console.log(add(+input1.value, +input2.value));
});
