const calculator = document.getElementById('calculator');

const result = document.createElement('div');
result.id = 'result';
result.textContent = '0';
result.classList.add('result');
result.classList.add('fr-1-5');
calculator.appendChild(result);

const buttons = [
  'AC', 'DEL', '%', '/',
  '7', '8', '9', '*',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '='
];

buttons.forEach(label => {
  const button = document.createElement('button');
  button.textContent = label;
  button.id = label;
  button.classList.add('box');

  // Make '0' span two columns
  if (label === '0') {
    button.classList.add('fr-1-3');
  }

  calculator.appendChild(button);
});