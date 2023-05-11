let dragged = null; 

const source = document.getElementById("draggable");
source.addEventListener("dragstart", (event) => {
    dragged = event.target;
})

const target = document.getElementById("droptarget");
target.addEventListener("dragover", (event) => {
    event.preventDefault();
})

target.addEventListener("drop", (event) => {
    event.preventDefault();
    if(event.target.className === "dropzone"){
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
    }
});