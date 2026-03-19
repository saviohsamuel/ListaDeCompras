// elementos
    const newItem = document.querySelector('.new__item');
    const submit = document.querySelector('.submit');
    const list = document.querySelector('.container__wrapper')
    const listItem = document.querySelector('.list__item')

// validação do input para digitar apenas letras
    newItem.addEventListener('input', () => {
        const regex = /\d+/g; // expressã regular (regex) para apenas letra
        newItem.value = newItem.value.replace(regex, ''); // remove números ao ser digitado
    });

// adiciona novo item
    submit.addEventListener('click', (event) => {
        event.preventDefault(); // desativa o reload da página
        if (newItem.value == '') {
            alert('Digite um item!');
        } else {
            const delItem = document.querySelector('.delete');
            // criando elementos
                const inputWrapper = document.createElement('div');
                const input = document.createElement('div')
                const tagInput = document.createElement('input');
                const label = document.createElement('label');
                const btnDel = document.createElement('button');
            // atribuindo estilizações
                inputWrapper.classList.add('input__wrapper', 'flex', 'f-a-center');
                input.classList.add('input', 'flex', 'f-a-center');
                tagInput.setAttribute('type', 'checkbox');
                tagInput.setAttribute('id', `${newItem.value}`);
                label.setAttribute('for', `${newItem.value}`);
                btnDel.classList.add('delete');
                btnDel.setAttribute('aria-label', 'button delete item');
            // atribuindo valor digitado no input 
                label.textContent = newItem.value;
            // organizando hierarquia
                list.prepend(inputWrapper);
                inputWrapper.append(input, btnDel);
                input.append(tagInput, label);
            // apagando valor do input depois de digitar o item
                newItem.value = '';
        }
    });
    // deleta item da lista e exibe no aviso com nome do item deletado
    list.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
        const itemWrapper = event.target.closest('.input__wrapper');
        const label = itemWrapper.querySelector('label');
        const danger = document.querySelector('.container__danger');
        const delDanger = document.querySelector('.close__danger');
        // pega o nome do item
            const nomeItem = label.textContent;
        // coloca no aviso
            listItem.textContent = nomeItem;
        // remove o item da lista
            itemWrapper.remove();
        // mostra o aviso
            danger.style.display = 'flex';
        // "exclui" o aviso da tela
            delDanger.addEventListener('click', (event) => {
                event.preventDefault();
                danger.style.display = 'none';
            })
        // esconde depois de 5 segundos
            setTimeout(() => {
                danger.style.display = 'none';
            }, 5000);
    }
});