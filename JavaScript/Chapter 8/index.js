btn=Array.from(document.getElementsByClassName("btn"));
for(let i=0;i<btn.length;i++)
{
    btn[i].addEventListener("click",()=>{alert(`Button${i+1} clicked`);});
}