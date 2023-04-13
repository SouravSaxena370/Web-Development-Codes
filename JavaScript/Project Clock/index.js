date=document.getElementsByClassName("date")[0];
time=document.getElementsByClassName("time")[0];

setInterval(()=>{
day=new Date();
date.innerText=day.getDate()+"/"+day.getMonth()+"/"+day.getFullYear();
time.innerText=day.getHours()+":"+day.getMinutes()+":"+day.getSeconds();
},1000);