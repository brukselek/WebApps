let display = document.getElementById('display');
function appendToDisplay(value){
   display.value += value;
}
function clearDisplay(){
   display.value = '';
}
function deleteFromDisplay(){
   display.value = display.value.slice(0, -1);
}
function calculate(){
   try{
      display.value = eval(display.value);
   }
   catch(e){
      display.value = 'Error';
   }
}
function handleSqrt(){
   let num = eval(display.value);

   if(num < 0){
      display.value = "Error"
   }
   else{
      display.value = Math.sqrt(num);
   }
}
function handlePercentages(){
   if(display.value != ''){
      display.value = eval(display.value) / 100;
   }
}