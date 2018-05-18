const startButton = document.getElementsByClassName('btn__reset');
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const ul = document.getElementsByTagName('ul')[0];
const qwertyBtns = document.getElementsByTagName('button');
let missed = 0;

let phrases = [
  "someday your prince charming will come",
  "people say nothing is impossible",
  "just remember if the world didnt suck we would all fall off",
  "cheer up the worst is yet to come",
  "he who laughs last didnt get it"
];



function getRandomPhraseAsArray (phrases){

      let randomNumber = Math.floor(Math.random()*5);

      let randomPhrase = phrases[randomNumber];
    //takes a phrase from the phrases array and divides it into its own array of single letters
      var arrayOfStrings = randomPhrase.split("");
        return arrayOfStrings;
};

function addPhraseToDisplay(){
  // do stuff any arr that is passed in, and add to `#phrase ul`
  const phraseArray = getRandomPhraseAsArray(phrases);

  for(let i = 0; i < phraseArray.length; i++)
    {
      let li = document.createElement('li');
      li.innerHTML = phraseArray[i];
      ul.appendChild(li).style.opacity ="0";
      li.classList.add('phraseClass');

      if(li.textContent == " "){
        li.classList.add('space');
      }
    }
};

//const phraseArray = getRandomPhraseAsArray(phrases);
//addPhraseToDisplay(phraseArray);

function checkLetter(btnText){
    let phraseList = document.getElementsByClassName('phraseClass');

    for (let i = 0; i < phraseList.length; i++)
    {
      if (btnText === phraseList[i].innerHTML)
      {
        phraseList[i].style.opacity ="1";
      }
    };
};


for (let i = 0; i < qwertyBtns.length; i++){
  qwertyBtns[i].addEventListener("click", () =>{
    checkLetter(qwertyBtns[i].textContent);
  });
};

//event listener for the keyboard
//pass letter to checkLetter function
//store inside of variable letterFound

//if checkLetter returns null
//remove a life and increase missed count


//create a checkWin funciton
function checkWin(){
  //if missed count = 5
      //display game loss
};


//Game Start
startButton[0].addEventListener("click", () =>{
  addPhraseToDisplay();
  document.getElementById('overlay').style.display = 'none';
});
