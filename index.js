///interface type yani k jo is mai bata dey ga ye wahi type ley ga number k number 
// string nhi error show kara dey ga
// let b = 5
// console.log(b);
// b = "atika" // error buz this typescript b is number
// getting inputs value as 
var honey1 = document.getElementById("input-line");
var bunny2 = document.getElementById("input-line2");
var showresult = document.getElementById("show");
var sum = document.getElementById('sub');
sum === null || sum === void 0 ? void 0 : sum.addEventListener('click', function (e) {
    e.preventDefault();
    var inputnalue = (honey1.value);
    var inputnalue2 = (bunny2.value);
    if (!isNaN(Number(inputnalue)) && !isNaN(Number(inputnalue2))) {
        var res = parseFloat(inputnalue) + parseFloat(inputnalue2);
        showresult.innerHTML = " Your Addition Result \uD83D\uDC9C : ".concat(res);
    }
    else {
        var res = inputnalue + ' ' + inputnalue2;
        showresult.innerHTML = " Hello \uD83D\uDC9C : ".concat(res);
    }
});
