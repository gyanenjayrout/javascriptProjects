// if user add note,add it to local stoarage
showNotes();


let addbtn = document.getElementById('add-btn');
addbtn.addEventListener("click", function (e) {
    let addtext = document.getElementById("add-text");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteobj = [];

    }
    else {
        noteobj = JSON.parse(notes)
    }
    noteobj.push(addtext.value);
    localStorage.setItem("notes", JSON.stringify(noteobj));
    addtext.value = " ";
    console.log(noteobj);
    showNotes();
});
// function to show local storage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteobj = [];

    }
    else {
        noteobj = JSON.parse(notes);
    }
    let html = "";
    noteobj.forEach(function (element, index) {
        html += `
        <div class=" notecard mx-3 my-2 card bg-success" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Notes ${index + 1}</h5>
                    <p class="card-text"> ${element}</p>
                    <button  id ="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete note</button>
                </div>
            </div>
        `;


    });
    let noteselm = document.getElementById("notes");
    if (noteobj.length != 0) {
        noteselm.innerHTML = html;
    }
    else {
        noteselm.innerHTML = `nothing to show ! use "Add your notes" section above to add notes`;
    }
}

// fun to delete a note

function deleteNote(index) {
   // console.log('i am deleting', index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteobj = [];

    }
    else {
        noteobj = JSON.parse(notes);
    }
    noteobj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(noteobj));
    showNotes();
}

 let search = document.getElementById("search-txt");
 search.addEventListener("input", function()
 {
    //console.log('input event fired!');
    let inputval = search.value.toLowerCase();
    console.log('input event fired',inputval);
    let notecards= document.getElementsByClassName("notecard");
    Array.from(notecards).forEach(function(element)
    {
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        
        if(cardtxt.includes(inputval))
        {
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        //console.log(cardtxt);

    })

 })