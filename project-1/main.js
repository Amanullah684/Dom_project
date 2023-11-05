//project requirement
//change the background color by generating random rgb color by clicking a button//

//steps
//steps 1- select html element by using id

    const root=document.getElementById('root');   
    const changebtn=document.getElementById('change-btn');


    changebtn.addEventListener('click',function(){
      
        
        
    root.style.backgroundColor= generateRGBColor();


    });



// steps 2- random color generator function

function generateRGBColor(){
  
    const red=Math.round(Math.random()*255);
    const green=Math.round(Math.random()*255);
    const blue=Math.round(Math.random()*255);

    return `rgb(${red},${green},${blue})`

}


