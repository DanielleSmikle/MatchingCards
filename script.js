// document.addEventListener('DOMContent', () => {  
//     const cardArray = [
//         {
//             name: 'back',
//         image: 'image/backpic.png'
//         },
//         {
//             name: 'back',
//             image: 'image/backpic.png'
//         },
//         {
//             name: 'barney',
//             image: 'image/barney.png'
//         },
//         {
//             name: 'barney',
//             image: 'image/barney.png'
//         },
//         {
//             name: 'hotdog',
//             image: 'image/hotdog.png'
//         },
//         {
//             name: 'hotdog',
//             image: 'image/hotdog.png'
//         },
//         {
//             name: 'julius',
//             image: 'image/julius.png'
//         },
//         {
//             name: 'julius',
//             image: 'image/julius.png'
//         },
//         {
//             name: 'match',
//             image: 'image/match.png'
//         },
//         {
//             name: 'match',
//             image: 'image/match.png'
//         },
//         {
//             name: 'meme',
//             image: 'image/meme.png'
//         },
//         {
//             name: 'meme',
//             image: 'image/meme.png'
//         },
//         {
//             name: 'reptar',
//             image: 'image/reptar.png'
//         },
//         {
//             name: 'reptar',
//             image: 'image/reptar.png'
//         },
//         {
//             name: 'rock',
//             image: 'image/rock.png'
//         },
//         {
//             name: 'rock',
//             image: 'image/rock.png'
//         },
//         {
//             name: 'slice',
//             image: 'image/slice.png'
//         },
//         {
//             name: 'slice',
//             image: 'image/slice.png'
//         },
//         {
//             name: 'tommy',
//             image: 'image/tommy.png'
//         },
//         {
//             name: 'tommy',
//             image: 'image/tommy.png'
//         },
        
//     ]


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


class MixnMatch {           //a constructor helps you get a new obj. ita a function 
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime
        this.timer = document.getElementById('timeRemaining');
        this.flipper = document.getElementById('flips');
    }

    newGame(){
        this.cardToCheck = null;    //looking for a card , but current card is sitting
        this.totalFlips = 0;
        this.timeRemaining = this.totalTime;
        this.matchingCards = [];
    
        this.inUse = true;      //if a card in "inUse, you are looking to find a match, must wait for next selection "

// card cant be fliped if - inUse=true, or card is matched / if card is sitting 
    }


}