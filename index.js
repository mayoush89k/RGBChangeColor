// DOM Catcher
const body = document.querySelector('body')
const switchBtn = document.querySelector('#switchBtn')
const resetBtn = document.querySelector('#reset')
const colorCode = document.querySelector('.color')

// add listener to switch button
switchBtn.addEventListener('click', switchFunction)

function switchFunction (){
    const redRandom = (Math.random() * 255 ).toFixed()
    const greenRandom = (Math.random() * 255 ).toFixed()
    const blueRandom = (Math.random() * 255 ).toFixed()
    const RGBColor = `rgb(${redRandom},${greenRandom},${blueRandom})`
    body.style.backgroundColor = RGBColor
    colorCode.innerText = RGBColor    
}

// add listener to reset button
resetBtn.addEventListener('click', resetFunction)

function resetFunction(){
    const RGBColor = 'rgb(255,255,255)'
    body.style.backgroundColor = ""
    colorCode.innerText = RGBColor
}