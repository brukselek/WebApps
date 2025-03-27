//rozpoczecie segmentu QUIZU!

/*tablica zawierajaca obiekty dla pytan do quizu*/
const questions = [
   /*obiekt dla kazdego pytania*/
   {
      //temat pytania
      topic: "Elementy fomularza",
      //tresc pytania
      question: "jakiego typu(input type=?) uzyjemy aby zakropkowac wprowadzone przez uzytkownika dane?",
      //mozliwe odpowiedzi
      possibleAnswers: ["text", "password", "checkbox", "radio"],
      //poprawna odpowiedz
      correctAnswer: "password"
   },
   {
      topic: "Metody formularza",
      question: "ktora metoda przesyla dane NIE jawne dla uzytkownika?",
      possibleAnswers: ["get", "post", "post oraz get"],
      correctAnswer: "post"
   },
   {
      topic: "Zdarzenia formularza",
      question: "Ktore zdarzenie wywoluje sie gdy uzytkownik kliknie na przycisk formularza?",
      possibleAnswers: ["onclick", "onchange", "onfocus"],
      correctAnswer: "onclick"
   }
];

//zmienna przechowujaca aktualny progres quizu
const quizProgress = document.getElementById("quizProgress");
//zmienna przechowujaca tresc i temat pytania
const questionContainer = document.getElementById("questionContainer");
//zmienna przechowujaca odpowiedzi do pytania
const answerContainer = document.getElementById("answerContainer");
//zmienna przechowujaca obecny index pytania
let currentQuestionIndex = 0;
//zmiena przechowujaca wynik quizu
let quizResult = 0;

function handleQuestion(index){

   //handling sekcji progresu quizu
   quizProgress.innerHTML = "";
   questions.forEach((question) => {  
      quizProgress.innerHTML += "<span></span>";
   });
   /*zmienna przechowujaca wartosc wszystkich tagow <span> dla kontenerow o id = quizProgress*/
   let spans = document.querySelectorAll("#quizProgress span");
   /*dla aktywnego indexu pytania dodaje klase "seen" czyli widziane juz przez nas pytanie*/
   for(let i = 0; i <= index; i++){
      spans[i].classList.add("seen");
   }

   //wyswietlanie aktualnego tematu/pytania
   questionContainer.innerHTML = 
   /*interpolacja stringow wyswietlajacych 
   pytanie/temat (uzywamy ` backtickow!! a nie ' apostrofow)*/
   `
   <p>${questions[index].topic}</p>
   <p>${questions[index].question}</p>
   `;

   //wyswietlanie mozliwych odpowiedzi
   answerContainer.innerHTML = "";
   questions[index].possibleAnswers.forEach((answer) => {
      answerContainer.innerHTML += `<button>${answer}</button>`;
   });

   //wybiera wszystkie selektory button w kontenerach o id = answerContainer 
   let answers = document.querySelectorAll("#answerContainer button");
   answers.forEach((btn) => {
      btn.classList.remove("correct", "incorrect");
      btn.disabled = false;
   });

   //dla kazdego przycisku z odpowiedzia
   answers.forEach((answer) => {
      //"nasluchuje" na klikniecie przycisku 
      answer.addEventListener("click", (e) => {
         answers.forEach((btn) => {
            btn.style.pointerEvents = 'none';
            btn.disabled = true;
         });

         //jezeli wybrana poprawna odpowiedz
         if(e.target.textContent === questions[index].correctAnswer){
            quizResult++;
            e.target.classList.add("correct");
         }
         //jezeli wybrana zla odpowiedz
         else{
            e.target.classList.add("incorrect");
         }
         if(currentQuestionIndex === questions.length - 1){
            document.getElementById(("quizResult")).innerHTML = `Brawo!, twoj wynik to: ${quizResult}/3!`;
         }
         else{
            nextButton.style.display = "block"; //pokazuje guzik "nastepne pytanie"
         }
      });
   });
}
nextButton.addEventListener("click", () => {
   currentQuestionIndex++;
   handleQuestion(currentQuestionIndex);
   nextButton.style.display = "none"; // Hide Next button after moving to the next question
});

handleQuestion(currentQuestionIndex);

//segment do zmiany motywu
function themeColor() {
   //kolor tla dla theme switcher
   var bodyColor = document.body;
   //ikona zmiany tla dla theme switchera
   let icon = document.getElementById("themeIcon");
   //toggle -> przelaczenie aktywnej klasy CSS
   
   bodyColor.classList.toggle("light-mode");

   icon.src = bodyColor.classList.contains("light-mode") ? "light_mode.png" : "dark_mode.png";
   }
