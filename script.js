

const display= document.getElementById("display");

addToDisplay =(input)=>{
display.value += input;
} 

calculte=()=>
{try{
    display.value= eval(display.value)}
    catch(error){
        display.value= "Error"
    }
}

clearDisplay=()=>{
    display.value= "";
}