
let b2 = document.getElementById('b1');
b2.addEventListener("submit",hi);

let a6 = document.getElementById('a5');

function hi(event)
{
    event.preventDefault();
let b4= parseInt(document.getElementById('timer').value);
hi2();
function hi2(){
 if (b4>= 0)
 {
   a6.textContent= b4;
 }
 b4--;
setTimeout( hi2 ,1000);}

}