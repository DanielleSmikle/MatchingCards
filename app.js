
const card1 = document.getElementById('card1')
const card2 = document.getElementById('card2')
const card3 = document.getElementById('card3')
const card4 = document.getElementById('card4')
const card5 = document.getElementById('card5')
const card6 = document.getElementById('card6')
const card7 = document.getElementById('card7')
const card8 = document.getElementById('card8')
const card9 = document.getElementById('card9')
const card10 = document.getElementById('card10')
const card11 = document.getElementById('card11')
const card12 = document.getElementById('card12')

const result = document.getElementById('result')


function checkWin() {
    if(points > 11)
    alert("WINNER");
}


let choice1 = ''
let choice2 = ''
let choice3 = ''
let choice4 = ''
let choice5 = ''
let choice6 = ''
let choice7 = ''
let choice8 = ''
let choice9 = ''
let choice10 = ''
let choice11 = ''
let choice12 = ''

let points = 0

console.log(points)

card1.addEventListener("click", function (event) {
    if (choice1 == '') {
        choice1 = 'barney'
    } else {
        if (choice2 == '') {
            choice2 = 'barney'

        }

    }
    if (choice1 == choice2) {
        points += 2
        result.innerText=points 


    }
    card1.firstElementChild.classList.toggle("hidden")
    card1.lastElementChild.classList.toggle("hidden")

    checkWin()
    console.log(points)    
})


card2.addEventListener("click", function (event) {
    card2.firstElementChild.classList.toggle("hidden")
    card2.lastElementChild.classList.toggle("hidden")

    if (choice1 == '') {
        choice1 = 'barney'
    } else {
        if (choice2 == '') {
            choice2 = 'barney'
        }
    }
    if (choice1 == choice2) {
        points += 2
        result.innerText=points
        

    }
    checkWin()
    console.log(points)
})

card3.addEventListener("click", function (event) {
    if (choice3 == '') {
        choice3 = 'hotdog'
    } else {
        if (choice4 == '') {
            choice4 = 'hotdog'

        }

    }
    if (choice3 == choice4) {
        points += 2
        result.innerText=points
        

    }
    
    card3.firstElementChild.classList.toggle("hidden")
    card3.lastElementChild.classList.toggle("hidden")

    checkWin()

    console.log(points)
})

card4.addEventListener("click", function (event) {
    card4.firstElementChild.classList.toggle("hidden")
    card4.lastElementChild.classList.toggle("hidden")

    if (choice3 == '') {
        choice3 = 'hotdog'
    } else {
        if (choice4 == '') {
            choice4 = 'hotdog'
        }
    }
    if (choice3 == choice4) {
        points += 2
        result.innerText=points

    }
    checkWin()
    console.log(points)
})

card5.addEventListener("click", function (event) {
    if (choice5 == '') {
        choice5 = 'julius'
    } else {
        if (choice6 == '') {
            choice6 = 'julius'

        }

    }
    if (choice5 == choice6) {
        points += 2
        result.innerText=points 


    }
    card5.firstElementChild.classList.toggle("hidden")
    card5.lastElementChild.classList.toggle("hidden")

    checkWin()

    console.log(points)    
})

card6.addEventListener("click", function (event) {
    card6.firstElementChild.classList.toggle("hidden")
    card6.lastElementChild.classList.toggle("hidden")

    if (choice5 == '') {
        choice5 = 'julius'
    } else {
        if (choice6 == '') {
            choice6 = 'julius'
        }
    }
    if (choice5 == choice6) {
        points += 2
        result.innerText=points

    }
    checkWin()
    console.log(points)
})

card7.addEventListener("click", function (event) {
    if (choice7 == '') {
        choice7 = 'pat'
    } else {
        if (choice8 == '') {
            choice8 = 'pat'

        }

    }
    if (choice7 == choice8) {
        points += 2
        result.innerText=points

    }
    card7.firstElementChild.classList.toggle("hidden")
    card7.lastElementChild.classList.toggle("hidden")

    console.log(points)
})
card8.addEventListener("click", function (event) {
    card8.firstElementChild.classList.toggle("hidden")
    card8.lastElementChild.classList.toggle("hidden")

    if (choice7 == '') {
        choice7 = 'pat'
    } else {
        if (choice8 == '') {
            choice8 = 'pat'
        }
    }
    if (choice7 == choice8) {
        points += 2
        result.innerText=points

    }

    checkWin()

    console.log(points)

})

card9.addEventListener("click", function (event) {
    if (choice9 == '') {
        choice9 = 'meme'
    } else {
        if (choice10 == '') {
            choice10 = 'meme'

        }

    }
    if (choice9 == choice10) {
        points += 2
        result.innerText=points

    }
    card9.firstElementChild.classList.toggle("hidden")
    card9.lastElementChild.classList.toggle("hidden")

    checkWin()

    console.log(points)
})
card10.addEventListener("click", function (event) {
    card10.firstElementChild.classList.toggle("hidden")
    card10.lastElementChild.classList.toggle("hidden")
    if (choice9 == '') {
        choice9 = 'meme'
    } else {
        if (choice10 == '') {
            choice10 = 'meme'
        }
    }
    if (choice9 == choice10) {
        points += 2
        result.innerText=points

    }
    checkWin()
    console.log(points)

})

card11.addEventListener("click", function (event) {
    if (choice11 == '') {
        choice11 = 'snoop'
    } else {
        if (choice12 == '') {
            choice12 = 'snoop'

        }

    }
    if (choice11 == choice12) {
        points += 2
        result.innerText=points

    }
    card11.firstElementChild.classList.toggle("hidden")
    card11.lastElementChild.classList.toggle("hidden")

    checkWin()

    console.log(points)
})

card12.addEventListener("click", function (event) {
    card12.firstElementChild.classList.toggle("hidden")
    card12.lastElementChild.classList.toggle("hidden")
    if (choice11 == '') {
        choice11 = 'snoop'
    } else {
        if (choice12 == '') {
            choice12 = 'snoop'
        }
    }
    if (choice11 == choice12) {
        points += 2
        result.innerText=points

    }
    checkWin()
    console.log(points)

})

