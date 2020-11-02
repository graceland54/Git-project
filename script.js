const firstPage = document.querySelector('.div1');
const secondPage = document.querySelector('.div2');
const thirdPage = document.querySelector('.space');
const button1 = document.querySelector('.goods');
const button2 = document.querySelector('.joy');

const dis1 = document.querySelector('.dis1');
const dis2 = document.querySelector('.dis2');



button1.addEventListener('click', function(){
    secondPage.classList.remove('hidden')
    firstPage.classList.add('hidden')
})

button2.addEventListener('click', function (e){
    e.preventDefault();


var yourName = document.getElementById("name").value;
var yourAge = document.getElementById("age").value;
var ageInDays = yourAge * 365;

if(yourName == " " || yourAge == " ") {
    alert("input missing field");
  
}
else{
    dis1.textContent = "Your Name Is: " + yourName;
    dis2.textContent = "You have lived " + ageInDays + " days on earth";
}

secondPage.classList.add('hidden');
thirdPage.classList.remove('hidden');

})