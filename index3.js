const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    todoFunc();
});


const todoFunc = () => {
    const listContainer = document.querySelector('.listContainer');
    const inputBox = document.querySelector('.inputBox');
    const inputBoxText = inputBox.value;
    const listElement = document.createElement('li');
    
    listElement.textContent = inputBoxText;
    const deleteBtn = deleteItem(listElement);
    listElement.append(deleteBtn);

    listContainer.append(listElement);
    // Resetting value after todo item is added
    inputBox.value = '';
}

const deleteItem = (listElement) => {
    const deleteBtn = document.createElement('button');
    deleteBtn.addEventListener('click', () => {
        listElement.remove();
    });
    deleteBtn.textContent = 'remove';
    return deleteBtn;
}

