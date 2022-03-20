
const card1 = document.getElementById('card1') 
const card2= document.getElementById('card2')
const card3 = document.getElementById('card3')
const card4= document.getElementById('card4')
const card5 = document.getElementById('card5')
const card6 = document.getElementById('card6')
const card7 = document.getElementById('card7')
const card8 = document.getElementById('card8')
const card9 = document.getElementById('card9')
const card10 = document.getElementById('card10')
const card11 = document.getElementById('card11')
const card12 = document.getElementById('card12')

let choice1=''
let choice2=''
let points= 0

card1.addEventListener("click",function(event){
    if (choice1 ==''){
        choice1='barney'
    } else {
    if (choice2 ==''){
        choice2= 'barney'

    }

}
    card1.firstElementChild.classList.toggle("hidden")
    card1.lastElementChild.classList.toggle("hidden")
})
card2.addEventListener("click",function(event){
    card2.firstElementChild.classList.toggle("hidden")
    card2.lastElementChild.classList.toggle("hidden")
})
card3.addEventListener("click",function(event){
    card3.firstElementChild.classList.toggle("hidden")
    card3.lastElementChild.classList.toggle("hidden")
})

card4.addEventListener("click",function(event){
    card4.firstElementChild.classList.toggle("hidden")
    card4.lastElementChild.classList.toggle("hidden")
})
card5.addEventListener("click",function(event){
    card5.firstElementChild.classList.toggle("hidden")
    card5.lastElementChild.classList.toggle("hidden")
})
card6.addEventListener("click",function(event){
    card6.firstElementChild.classList.toggle("hidden")
    card6.lastElementChild.classList.toggle("hidden")
})
card7.addEventListener("click",function(event){
    card7.firstElementChild.classList.toggle("hidden")
    card7.lastElementChild.classList.toggle("hidden")
})
card8.addEventListener("click",function(event){
    card8.firstElementChild.classList.toggle("hidden")
    card8.lastElementChild.classList.toggle("hidden")
})
card9.addEventListener("click",function(event){
    card9.firstElementChild.classList.toggle("hidden")
    card9.lastElementChild.classList.toggle("hidden")
})
card10.addEventListener("click",function(event){
    card10.firstElementChild.classList.toggle("hidden")
    card10.lastElementChild.classList.toggle("hidden")
})
card11.addEventListener("click",function(event){
    card11.firstElementChild.classList.toggle("hidden")
    card11.lastElementChild.classList.toggle("hidden")
})
card12.addEventListener("click",function(event){
    card12.firstElementChild.classList.toggle("hidden")
    card12.lastElementChild.classList.toggle("hidden")
})
