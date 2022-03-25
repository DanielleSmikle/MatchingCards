// document.addEventListener('DOMContent', () => {  
    const cardArray = [
        {
            name: 'barney',
            image: 'image/barney.png'
        },
        {
            name: 'barney',
            image: "image/barney.png"
        },
        {
            name: 'hotdog',
            image: 'image/hotdog.png'
        },
        {
            name: 'hotdog',
            image: 'image/hotdog.png'
        },
        {
            name: 'julius',
            image: 'image/julius.png'
        },
        {
            name: 'julius',
            image: 'image/julius.png'
        },
        {
            name: 'pat',
            image: 'image/pat.png'
        },
        {
            name: 'pat',
            image: 'image/pat.png'
        },
        
        {
            name: 'meme',
            image: 'image/meme.png'
        },
        {
            name: 'meme',
            image: 'image/meme.png'
        },
        {
            name: 'snoop',
            image: 'image/snoop.png'
        },
        { 
            name: 'snoop',
            image: 'image/snoop.png'
        }
    ]

    function render () {
        console.log(cardArray)
        for (let i=0; i<= cardArray.length; i++){
            let img = document.createElement("img") 
            img.src = cardArray[i].image 
            document.querySelector(".gameContainer").appendChild(img)
        }
    }
    render()


       
        





















//     ]

// const imgArray;
// function initialize (){
//     imgArray [imagenNum++] = new imageItem(imageadIR + "backpic");
// }
//     imgArray = [ new imageItem( imageDir + "")]

//     cardArray.sort(() => 0.5 = Math.random()) 
//     const grid = document.querySelector('.grid')
//     const resultDisplay = document.querySelector('#result')
//     let cardsChosen = []
//     let cardsChosenID = []
//     let cardsWon= []

//     function creatBoard() {
//         for (let i = 0; i<cardArray.length; i++){
//             const card = document.createElement('img')
//             card.setAtrtribute(<i)
//         }

//     }


         
// })
// makign the board game
// const grid = document.querySelector('.grid')

// function makeBoard() {
//     for (let i=0; i< cardArray.length; i++) {
//     const card = document.createElement('img')
//     card.setAttribute('src', 'image/backpic.png')
//     card.setAttribute('data-id', i)
// grid.appendChild(card)
//     }
// }

// console.log(makeBoard()) 

// nothing that i do will make my images load in! i have tried the array method, i also tried putting into my html file.. the image does load, but it is not fitting the size of my card. Maybe i am not sizing soemthing correctly? But i cannt move on to my next step without this..
//I have left all my code as is, I did not want to delete anything, eventhough these are two different methds.  .. I NEED HELP 

// if(document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', ready ());
// } else{
//     ready();
// }
// function ready () {
//     let overlays = Array.from(document.getElementsByClassName('overlay-text'));
//     let cards = Array.from(document.getElementsByClassName('card'));

// overlays.forEach(overlay => {
//     overlay.addEventListener('click', () => {
//         overlay.classList.remove('visible');
//     });
// });
// }



// function newGame () {
//     let game = new MixnMatch (105, cards);
// }

// class MixnMatch {           //a constructor helps you get a new obj. ita a function - total points instead
//     constructor(totalTime, cards) {
//         this.cardsArray = cards;
//         this.totalTime = totalTime;
//         this.timeRemaining = totalTime
//         this.timer = document.getElementById('timeRemaining');
//         this.flipper = document.getElementById('flips');
    // }

//     newGame(){
//         this.cardToCheck = null;    //looking for a card , but current card is sitting
//         this.totalClicks = 0;
//         this.timeRemaining = this.totalTime;
//         this.matchingCards = [];
    
//         this.inUse = true;      //if a card in "inUse, you are looking to find a match, must wait for next selection "

// // card cant be fliped if - inUse=true, or card is matched / if card is sitting 
    // }
// canCardFlip(card) {
//     return !this.inUse && !this.matchingCards.includes(card) && card !== this.cardToCheck; 
//     }
// }

// cardFlip(card) {
//     if (this.canCardFlip(card)) {
//         this.totalClicks++;
//         this.flipper.innerText = this.totalClicks;

    // }    //this doesnt work yet , i think the game needs a startign indicator
// }

// console.log ("this is showing up")