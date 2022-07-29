const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");
for (let placeholder of placeholders) {
    placeholder.addEventListener("dragover",dragover);
    placeholder.addEventListener("dragenter",dragenter);
    placeholder.addEventListener("dragleave",dragleave);
    placeholder.addEventListener("drop",dragdrop);
}
item.addEventListener("dragstart",dragstart);
item.addEventListener("dragend",dragend);
function dragstart(evt) {
  evt.target.classList.add("hold");
  setTimeout(() => {evt.target.classList.add("hide");},0);
 
}
function dragend(evt) {
    evt.target.classList.remove("hold","hide");
  
}

function dragover(evt) {
evt.preventDefault();
}
function dragenter(evt) {
    evt.target.classList.add("placeholder_active");
}
function dragleave(evt) {
    evt.target.classList.remove("placeholder_active");
}
function dragdrop(evt) {
    evt.target.append(item);
    evt.target.classList.remove("placeholder_active");
}