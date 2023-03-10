//your code here

/* draggable element */
const item = document.querySelector('.image');

item.addEventListener('dragstart', dragStart);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}


/* drop targets */
const boxes = document.querySelectorAll('.box');

images.forEach(img => {
    img.addEventListener('dragenter', dragEnter)
    img.addEventListener('dragover', dragOver);
    img.addEventListener('dragleave', dragLeave);
    img.addEventListener('drop', drop);
});


function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('image');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('image');
}

function dragLeave(e) {
    e.target.classList.remove('image');
}

function drop(e) {
    e.target.classList.remove('image');

    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    // add it to the drop target
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');
}