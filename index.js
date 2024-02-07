let weight_val=document.querySelector("#weight").value;
let height_val=document.querySelector("#height").value;
let btn=document.querySelector("button")
let outputtext=document.querySelector("#outputtext");

function calculateBmi(){
    var height_val = document.querySelector('#height').value;
	var weight_val = document.querySelector('#weight').value;
	var bmi = weight_val / (height_val / 100 * height_val / 100);
	var bmio = (bmi.toFixed(2));
    console.log(bmio);
	document.querySelector("#outputtext").innerHTML = "Your BMI is " + bmio;
}
btn.addEventListener("click",()=>{
    if(isNaN(weight_val) || isNaN(height_val)){
        alert('Please enter a valid values');
    }
    else{
        calculateBmi();
        
    }
   
})

