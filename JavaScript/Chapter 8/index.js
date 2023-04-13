btn=Array.from(document.getElementsByClassName("btn"));
for(let i=0;i<btn.length;i++)
{
    btn[i].addEventListener("click",()=>{alert(`Button${i+1} clicked`);});
}

button=document.getElementById("website-button");
website=document.getElementById("website-name").value;
link=document.getElementById("website-link").value;

websites=document.getElementsByClassName("favourite-website")[0];
item=localStorage.getItem("websites");
button.addEventListener("click",()=>{
    localStorage.setItem(website,link);
    elem=document.createElement("p");
    elem.innerText=`${website} : ${link}`;
    websites.appendChild(elem);
})
