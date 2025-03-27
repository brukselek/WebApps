var height, weight, bmi;

function calculateBMI() {
   //get the values of height and weight
   height = document.getElementById("getHeight").value;
   weight = document.getElementById("getWeight").value;

   //validate the input
   if(weight <= 0 || height <= 0) {
      alert("Please enter valid values");
      return;
   }

   //convert height to meters
   height /= 100;

   //calculate BMI (weight / height^2)
   bmi = weight / Math.pow(height, 2);
   //round the BMI to 1 decimal place
   bmi = bmi.toFixed(1);

   if(bmi < 16){
      document.getElementById("result").innerHTML = `Your Bmi is: ${bmi} which means severely underweight`;
   }
   else if(bmi >= 16 && bmi <= 16.99){
      document.getElementById("result").innerHTML = `Your Bmi is: ${bmi} which means moderate underweight`;
   }
   else if(bmi >= 17 && bmi <= 18.49){
      document.getElementById("result").innerHTML = `Your Bmi is: ${bmi} which means mild underweight`;
   }
   else if(bmi >= 18.5 && bmi <= 24.99){
      document.getElementById("result").innerHTML = `Your Bmi is: ${bmi} which means normal weight`;
   }
   else if(bmi >= 25 && bmi <= 29.99){
      document.getElementById("result").innerHTML = `Your Bmi is: ${bmi} which means overweight`;
   }
   else if(bmi >= 30 && bmi <= 34.99){
      document.getElementById("result").innerHTML = `Your Bmi is: ${bmi} which means obese class 1`;
   }
   else if(bmi >= 35 && bmi <= 39.99){
      document.getElementById("result").innerHTML = `Your Bmi is: ${bmi} which means obese class 2`;
   }
   else if(bmi >= 40){
      document.getElementById("result").innerHTML = `Your Bmi is: ${bmi} which means obese class 3`;
   }
   //display the result in the div with id result
}
