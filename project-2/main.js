/**
 * Project Requirements:
 * - Change the background color by generating random hex color by clicking a button
 * - Also display the hex code to a disabled input field
 */


//step 1- select element by using id 

const root=document.getElementById('root')
const Changebtn=document.getElementById('Change-btn')
const output=document.getElementById('output')

Changebtn.addEventListener('click',function(){

    root.style.background=generateHaxColor();
    output.value=generateHaxColor();
})
function generateHaxColor(){
    const red=Math.round(Math.random()*255).toString(16);
    const green=Math.round(Math.random()*255).toString(16);
    const blue=Math.round(Math.random()*255).toString(16);
    return `#${red}${green}${blue}`

}
