const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const myItem = input.value;
  input.value = '';
  if (myItem != '') {                                
    const item = document.createElement('li');
    const text = document.createElement('span');
    const btn = document.createElement('button');

    /*item.appendChild(text);*/
    item.insertAdjacentText('beforeend', myItem);
    text.textContent = myItem;
    item.appendChild(btn);                 
    btn.textContent = 'X';
    list.appendChild(item);

    btn.addEventListener('click', () => {list.removeChild(item);});

    input.focus(); 
  }                        
});