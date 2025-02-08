const display = document.getElementById("display");
const isdisplaying = false;

function AppendToDisplay(things){
    display.value += things;
}
function Clear (){
    display.value = 0 ;
    isdisplaying = false ; 
}

function Equal(){

    try{
        display.value = eval(display.value);
        
    }
    catch(error){
        display.value= `Error`;
    }
    
}