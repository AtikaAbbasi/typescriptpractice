
///interface type yani k jo is mai bata dey ga ye wahi type ley ga number k number 
// string nhi error show kara dey ga

// let b = 5
// console.log(b);

// b = "atika" // error buz this typescript b is number
// getting inputs value as 

// getting inputs and button
let honey1 = document.getElementById("input-line")! as HTMLInputElement
let  bunny2 = document.getElementById("input-line2")! as HTMLInputElement
let  showresult = document.getElementById("show")! as HTMLParagraphElement
let sum = document.getElementById('sub')! as HTMLInputElement

sum?.addEventListener('click', (e) => {
    e.preventDefault()

    let inputnalue = (honey1.value);
    let inputnalue2 = (bunny2.value);
  
    if (!isNaN(Number(inputnalue)) && !isNaN(Number(inputnalue2))) {
        let res = parseFloat(inputnalue) + parseFloat(inputnalue2);
       showresult.innerHTML = ` Your Addition Result 💜 : ${res}`
    } else {
        let res = inputnalue + ' ' + inputnalue2;
        showresult.innerHTML =` Hello 💜 : ${res}`
    }



})




















