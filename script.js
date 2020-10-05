const ENTER_KEY = 'Enter';
let button = document.getElementById('button');
let tasks = document.getElementById('tasks'); 
let textField = document.getElementById('text');

function addTask() {
    let li = document.createElement('li');
    let checkbox = document.createElement('input');
    let trash = document.createElement('input');
    
    checkbox.type = 'checkbox';
    trash.type = 'button';

    checkbox.classList.add('chckbx');
    trash.classList.add('trashButton');
    
    trash.value = '🗑';
    // li.textContent = list[i].name;
    li.textContent = textField.value;

    if (textField.value === '') {
        return;
    }
    
    li.appendChild(checkbox);
    li.appendChild(trash);
    tasks.appendChild(li);
    textField.value = '';

    checkbox.addEventListener('change', (e) => {
        let target = e.target;
        if (checkbox.checked) {
            li.style.textDecoration = 'line-through';
        } else {
            li.style.textDecoration = 'none';
        }
    })

    trash.addEventListener('click', () => {
        li.classList.add('trashGone');

        li.addEventListener('transitionend', () => {
            li.remove();
        })
    })
}

textField.addEventListener('keyup', (evt) => {
    console.info(evt.key);
    if (evt.key === ENTER_KEY) {
        evt.preventDefault();
        addTask();
    }
})

button.addEventListener('click', () => {
    addTask();
})