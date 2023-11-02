// Write your code here!

const element = document.getElementById('main');
const secondChild = element.querySelector('id')
element.remove('#main');

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Connor Burns is the champion';