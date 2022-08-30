const element = document.getElementById("button");
element.addEventListener("click",function() {
var amount = document.getElementById('amount').value;
console.log(amount);
var rate = document.getElementById('intrest').value;
console.log(intrest);
var duration = document.getElementById('duration').value;
console.log(duration);
var intrest = amount*rate*duration/100;

var totalamount = parseInt(amount) + parseInt(intrest); 
var EMI = totalamount/(duration*12);
document.getElementById('demo').innerText = "Intrest is  ₹"+ intrest;
document.getElementById('demo2').innerText = "Total Amount is  ₹"+ totalamount
document.getElementById('demo3').innerText = "Amount per month to be paid is  ₹"+ EMI + " per month" ;

});