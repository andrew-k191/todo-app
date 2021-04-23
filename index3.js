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
    const divElement = document.createElement('div');
    const inputTextSpan = document.createElement('span');
    inputTextSpan.textContent = inputBox.value;
    const checkbox = addCheckbox(inputTextSpan);
    const deleteBtn = deleteItem(divElement, checkbox);
    
    promptChange();
    divElement.append(checkbox, inputTextSpan, deleteBtn);
    listContainer.append(divElement);
    inputBox.value = '';
};

const deleteItem = (divElement, checkbox) => {
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('divButton');
    deleteBtn.textContent = 'Remove';
    deleteBtn.addEventListener('click', () => {
        if (checkbox.checked) {
            divElement.remove();
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
        prompt.textContent = 'Awesome!! What else?';
    } else {
        prompt.textContent = 'What do you want to do today?';
    }
};

