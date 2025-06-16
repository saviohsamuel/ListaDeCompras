const submitButton = document.querySelector('.submit');
const inputNewItem = document.querySelector('.new__item');
const containerWrapper = document.querySelector('.container__wrapper');
const dangerContainer = document.querySelector('.container__danger');
const closeDanger = document.querySelector('.close__danger');
const dangerItem = document.querySelector('.list__item');

function addDeleteEvent(button) {
    button.addEventListener('click', () => {
        const item = button.closest('.input__wrapper');
        const itemName = item.querySelector('label').innerText;
        dangerItem.textContent = itemName;
        item.remove();
        dangerContainer.style.display = 'flex';
        setTimeout(() => {
            dangerContainer.style.display = 'none';
        }, 6000);
    });
}
const deleteButtons = document.querySelectorAll('.delete');
deleteButtons.forEach(button => {
    addDeleteEvent(button);
});
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const itemText = inputNewItem.value.trim();
    if (itemText !== '') {
        const newItem = document.createElement('div');
        newItem.classList.add('input__wrapper', 'flex', 'f-a-center');
        newItem.innerHTML =
        `
            <div class="input flex f-a-center">
                <input type="checkbox">
                <label>${itemText}</label>
            </div>
            <button class="delete">
                <img src="imgs/trash.svg" alt="Apagar">
            </button>
        `;
        containerWrapper.prepend(newItem);
        inputNewItem.value = '';
        addDeleteEvent(newItem.querySelector('.delete'));
    }
});
closeDanger.addEventListener('click', () => {
    dangerContainer.style.display = 'none';
});