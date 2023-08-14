

//calculator functions


function add(num1, num2)
{
    return num1 + num2;
}
function substr(num1, num2)
{
    return num1 - num2;
}
function multply(num1, num2)
{
    return num1 * num2;
}
function divide(num1, num2)
{
    return num1 / num2;
}
//calling 
function calculator(num1, num2,oporator){
return oporator(num1,num2)  
}

calculator(2, 4, add);