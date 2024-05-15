var display=document.getElementById("display");
function appendtodisplay(input)
{
    display.value=display.value+input;
    
}
function calculateDisplay()
{
    try{
        display.value=eval(display.value)
    }
    catch(error)
    {
        display.value="Error";
    }
}
function clearDisplay()
{
    display.value="";
}