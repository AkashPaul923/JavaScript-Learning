console.log('hello')


function redBG(){
    document.body.style.backgroundColor = 'Red'
}

const makeBlueButton = document.getElementById('bg-blue')
makeBlueButton.onclick = blueBG

function blueBG(){
    document.body.style.backgroundColor = 'Blue'
}


const makeGreenButton = document.getElementById('bg-green')
makeGreenButton.onclick = function greenBG(){ document.body.style.backgroundColor = 'Green'}


document.getElementById('bg-golden').addEventListener('click', function(){ 
    document.body.style.backgroundColor = 'Goldenrod'
})

