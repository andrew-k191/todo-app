// tracks current number of to-do list items
let listCounter = 0;

const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    listFunc();
});

const listFunc = () => {
    listCounter++;
    const listContainer = document.querySelector('.listContainer');
    const inputBox = document.querySelector('.inputBox');
    const listElement = document.createElement('li');
    const inputTextSpan = document.createElement('span');
    inputTextSpan.textContent = inputBox.value;
    const checkbox = addCheckbox(inputTextSpan);
    const deleteBtn = deleteItem(listElement, checkbox);
    promptChange();

    // adding checkbox, text, and delete button to list element
    listElement.append(checkbox, inputTextSpan, deleteBtn);
    listContainer.append(listElement);
    inputBox.value = '';
};

const deleteItem = (listElement, checkbox) => {
    const deleteBtn = document.createElement('button');
    // deleteBtn.classList.add('button', 'is-danger', 'is-rounded', 'is-small');
    deleteBtn.textContent = 'remove';
    deleteBtn.addEventListener('click', () => {
        if (checkbox.checked) {
            listElement.remove();
            listCounter--;
            promptChange();
        } 
    });
    return deleteBtn;
};

const addCheckbox = (inputTextSpan) => {
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.addEventListener('change', () => {
        if (inputTextSpan.classList.contains('linethrough')) {
            inputTextSpan.classList.remove('linethrough');
            
        } else {
            inputTextSpan.classList.add('linethrough');
        }
    });
    return checkbox;
};

const promptChange = () => {
    const prompt = document.querySelector('.prompt');
    if (listCounter >= 1) {
        const span1 = document.createElement('span');
        span1.classList.add('span-text');
        span1.textContent = '(check the box to mark tasks as completed!)';
        prompt.textContent = 'What else?';
        prompt.append(span1);
    } else {
        prompt.textContent = 'What do you want to do today?';
    }
};

