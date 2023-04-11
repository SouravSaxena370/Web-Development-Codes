navbar=document.getElementsByClassName('navbar');
console.log(navbar[0].firstElementChild)
// navbar[0].hidden=true;
// navbar[0].firstElementChild.style.backgroundColor='cyan';

container=document.getElementsByClassName('container');
container[0].firstElementChild.style.backgroundColor='green';
container[0].lastElementChild.style.backgroundColor='green';

li=Array.from(document.getElementsByTagName('li'));
li.forEach(element => {
    element.style.backgroundColor='cyan';
});