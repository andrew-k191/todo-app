document.querySelector('.form')
.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
});

const addTodo = () => {
    const listContainer = document.querySelector('.listContainer');
    const inputBox = document.querySelector('.inputBox');
    const todoText = inputBox.value;

    const todoDiv = document.createElement('div');
    const todoTextSpan = document.createElement('span');
    todoTextSpan.textContent = todoText;

    const checkbox = createCheckbox(todoTextSpan);
    const deleteButton = createDeleteButton(todoDiv, checkbox);
    
    todoDiv.append(checkbox, todoTextSpan, deleteButton);
    listContainer.append(todoDiv);
    inputBox.value = '';
    changeFormLabelText();
};

const createDeleteButton = (divElement, checkbox) => {
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('divButton');
    deleteButton.textContent = 'Remove';
    deleteButton.addEventListener('click', () => {
        if (checkbox.checked) {
            divElement.remove();
            /*--- Made change here---*/
            changeFormLabelText();
        } 
    });
    return deleteButton;
};

const createCheckbox = (todoTextSpan) => {
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.addEventListener('change', () => {
        todoTextSpan.classList.toggle('lineThrough');
    });
    return checkbox;
};

const changeFormLabelText = () => {
    const listContainer = document.querySelector('.listContainer');
    const length = listContainer.children.length;
    const prompt = document.querySelector('.prompt');
    if (length > 0) {
        prompt.textContent = 'Awesome!! What else?';
    } else {
        prompt.textContent = 'What do you want to do today?';
    }
};

