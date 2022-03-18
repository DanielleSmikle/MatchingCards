// whiteboarding (THINGS I NEED TO DO)
// Connect javascript to html
// Get cards to appear on the scren 
// find images to match/ find a theme
// get a timer 

//this is a test 


// document.addEventListener('DOMContentLoaded',() => {    //addcardselection2times

const cardSelection = [
    {
        name: 'Barney',
        image: 'image/Barney.png'
    },
    {
        name: 'Barney',
        image: 'image/Barney.png'
    },
    {
        name: 'Back',
        image: 'image/Backpic.png'
    },
    {
        name: 'Back',
        image: 'image/Backpic.png'
    },
    {
        name: 'Hotdog',
        image: 'Hotdog.png'
    },
    {
        name: 'Hotdog',
        image: 'Hotdog.png'
    },
    {
        name: 'Julius',
        image: 'Julius.png'
    },
    {
        name: 'Julius',
        image: 'Julius.png'
    },
    {
        name: 'Match',
        image: 'Match.png'
    },
    {
        name: 'Match',
        image: 'Match.png'
    },
    {
        name: 'Meme',
        image: 'Meme.png'
    },
    {
        name: 'Meme',
        image: 'Meme.png'
    },
    {
        name: 'Reptar',
        image: 'Reptar.png'
    },
    {
        name:'Reptar',
        image: 'Reptar.png'
    },
    {
        name: 'Rock',
        image: 'Rock.png'
    },
    {
        name: 'Rock',
        image: 'Rock.png'
    },
    {
        name: 'Slice',
        image: 'Slice.png'
    },
    {
        name: 'Slice',
        image: 'Slice.png'
    },
    {
        name: 'Tommy',
        image: 'Tommy.png'
    },
    {
        name: 'Tommy',
        image: 'Tommy.png'
    }
]
cardsList.sort( () => 0.5 -math)
//time for the board 

const grid = document.querySelector('.grid');

function makeBoard() {
    for(let i =0; i< cardSelection.length; i++) {
        let card = document.createElement('img')
        card.setAttribute('src', 'Images/Backpic.png');

        card.setAttribute('data-id', i);

        grid.appendChild(card)


    }
}
