function createTimeDisplay(){
   let timeDiv = document.createElement('div');
   timeDiv.id = "timeDisplay";
   timeDiv.textContent = "Reaction Time: -- ms";

   let container = document.querySelector(".container");
   let header = document.querySelector("header");

   if (container && header) {
      container.insertBefore(timeDiv, header);
   }
}

function startReactionTest(){
   console.log("Started reaction test");
}

createTimeDisplay();