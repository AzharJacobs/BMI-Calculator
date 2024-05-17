//Get the button elements
const resultButton = document.getElementById("result-button");
const clearButton = document.getElementById("clear-button");
// Add onclick event handlers to the buttons
resultButton.onclick = bmiButton;
clearButton.onclick = restart;
function bmiButton() {
  // providing calculation for BMI
  let bmi;
  let weight = parseInt(document.getElementById("bmi-weight").value);
  let height = parseInt(document.getElementById("bmi-height").value);
  let results = document.getElementById("bmi-results");
  document.getElementById("bmi-weight").textContent = weight + "kg";
  document.getElementById("bmi-height").textContent = height + "cm";
  bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
  results.textContent = bmi;
  if (bmi <= 18.4) {
     bmi ;
    output= "You are underweight, Go on a Bulk";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmi ;
    output= "Good on you, you are normal. Start Main Gaining.";
  } else if (bmi >= 25 && bmi <= 39.9) {
    bmi ;
    output= "Eat some veggies, take a jog, you are overweight. Start The Cut.";
  } else {
    bmi ;
    output="Unfortunately you need to see the doctor. Gyming Wont Fix You.";
  }
  document.getElementById("results").innerHTML = output;
}
function restart() {
    window.location.reload();
} 