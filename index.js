const inputForm = document.querySelector('.inputForm');
const listContainer = document.querySelector('.list');

const addTodoItem = (todoItem) => {
    const li = document.createElement('li');
    li.append(todoItem.value);
    listContainer.append(li);
}
inputForm.addEventListener('submit', (e) => {
    const input = document.querySelector('.input');
    addTodoItem(input);
    // Resetting the value
    input.value = '';
    // Stop webpage from refreshing
    e.preventDefault();
});



// Can use create Element to first create an unordered list, then add first list item
// If the list exists then just add list item