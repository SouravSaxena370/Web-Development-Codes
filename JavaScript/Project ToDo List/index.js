showNotes();

addNote=document.getElementsByClassName("Add-note")[0];
addNote.addEventListener('click',()=>{
    title=document.getElementById("tit");
    description=document.getElementById("desc");
    
    additem(title.value,description.value);
    
    title.value="";
    description.value="";
})

function additem(tit,des){
    let notesobj={
        title: tit,
        description: des
    }
    let notes=localStorage.getItem("notes");
    if(notes==null)
    {
        notesArray=[];
    }
    else{
        notesArray=JSON.parse(notes);
    }
    notesArray.push(notesobj);
    localStorage.setItem("notes",JSON.stringify(notesArray));
    // console.log(notesArray);
    showNotes();
}

function showNotes(){
    notes=localStorage.getItem("notes");
    notesArray=JSON.parse(notes);
    notes_container=document.getElementsByClassName("notes-container")[0];
    notes_container.innerHTML="";
    if(notesArray==null)
    itemscount=0;
    else
    itemscount=notesArray.length;
    // console.log(itemscount);
    if(notesArray.length==0)
    {
        notes_container.innerHTML="Nothing to show! Add note."
        return;
    }
    i=0;
    notesArray.forEach(element => {
        notes_container.innerHTML+=`<div class="notes-container-item">
        <p class="bold">${element.title}</p>
        <p>${element.description}</p>
        <button onclick="remove(${i})" class="Remove">Remove</button>
        </div>`;
        i++;
    })
}

function remove(i){
    // console.log(i);
    notes=JSON.parse(localStorage.getItem("notes"));
    notesArray=Array.from(notes);
    // console.log(notesArray);
    notesArray.splice(i,1);
    localStorage.setItem("notes",JSON.stringify(notesArray));
    showNotes();
}


