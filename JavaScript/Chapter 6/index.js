let age=prompt("Enter your age: ");
if(age>=18)
{
    console.log("You can drive.");
}
else if(age<0)
{
    console.error("Your age can't be negative");
}
else{
    console.log("You can't drive");
}

while (true)
{
    let choice=confirm("Do you want to see prompt again?");
    if(choice == false)
    break;
}

let color=prompt("Enter color of the body: ");
document.body.style.backgroundColor=color;

location.href="https://codewithharry.com"