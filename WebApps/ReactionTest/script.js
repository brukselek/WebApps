let startTime;


function createTimeDisplay(){
   let timeDiv = document.createElement('div');
   timeDiv.id = "timeDisplay";
   timeDiv.textContent = "Reaction Time: -- ms";

   let container = document.querySelector(".container");
   let header = document.querySelector("header");

   if (container && header) {
      container.insertBefore(timeDiv, header);
   }

   return timeDiv;
}

function updateTimeDisplay(time){
   let timeDiv = document.getElementById('timeDisplay');
   if(!timeDiv) createTimeDisplay();
   timeDiv.textContent = `Reaction Time: ${time.toFixed(2)}ms`;
}

function stopTest(){
   let reactionTime = performance.now() - startTime;
   updateTimeDisplay(reactionTime);
   document.body.style.background = "#457725";
}

function startReactionTest(){
   let button = document.querySelector('button');
   button.disabled = true;

   setTimeout(() => {
      startTime = performance.now();
      document.body.style.backgroundColor = "#901E1D";

      document.body.addEventListener("click", stopTest, {once:true})
      button.disabled = false;

   }, Math.floor(Math.random() * 5000) + 1000);
}

createTimeDisplay();