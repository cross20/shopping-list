const inputAddItem = document.querySelector('input');
const buttonAddItem = document.querySelector('button');
const ulItems = document.querySelector('ul');

buttonAddItem.addEventListener('click', () => {
    const value = inputAddItem.value.trim();
    if (value !== '') {
        // Create list item that will be added to shopping list
        const liItem = document.createElement('li');        
        liItem.textContent = value;

        // Create delete button to remove list item from shopping list
        const buttonDelete = document.createElement('button');
        buttonDelete.textContent = 'Delete';
        buttonDelete.addEventListener('click', () => {
            liItem.remove();
        });

        // Reset input for adding an item
        inputAddItem.value = '';

        // Add list item to list
        liItem.appendChild(buttonDelete);
        ulItems.appendChild(liItem);
    }
});