const startButton = document.getElementsByClassName('btn__reset');
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;

let phrases = [/* 5 phrases that I'll think of later */];



function getRandomPhraseAsArray (arr){
    //takes an phrase from the phrases array and divides it into its own array
    //of single letters
    //Make sure that this function is reusable
    //getRandomPhraseAsArray(phrases);
};

function addPhraseToDisplay(arr){
  // do stuff any arr that is passed in, and add to `#phrase ul`
};

//const phraseArray = getRandomPhraseAsArray(phrases);
//addPhrasetoDisplay(phraseArray);

function checkLetter(){


};

//event listener for the keyboard
//pass letter to checkLetter function
//store inside of variable letterFound

//if checkLetter returns null
//remove a life and increase missed count


//create a checkWin funciton



//Game Start
startButton[0].addEventListener("click", () =>{
  document.getElementById('overlay').style.display = 'none';
});
