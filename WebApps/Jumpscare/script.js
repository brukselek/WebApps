function jumpscare(){
   let scareDiv = document.createElement('div');
   scareDiv.style.position = "fixed";
   scareDiv.style.top = "0";
   scareDiv.style.left = "0";
   scareDiv.style.width = "100vw";
   scareDiv.style.height = "100vh";
   scareDiv.style.background = "black";
   scareDiv.style.display = "flex";
   scareDiv.style.justifyContent = "center";
   scareDiv.style.alignItems = "center";
   scareDiv.style.zIndex = "9999";

   let img = document.createElement('img');
   img.src="foxyPlushimg.webp";
   img.style.width = "100%";
   img.style.height = "100%";
   img.style.objectFit = "cover";

   let audio = new Audio("https://www.fesliyanstudios.com/play-mp3/4385");
   audio.play();

   scareDiv.appendChild(img);
   document.body.appendChild(scareDiv);

   setTimeout(() => {
      scareDiv.remove();
   }, 2000);
}