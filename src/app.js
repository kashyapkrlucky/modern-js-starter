import { sayHello } from './modules/module1.js';
import { calculate } from './modules/module2.js';

const app = document.getElementById('app');


const message = document.createElement('div')
message.innerHTML = `<p>This is a message => ${sayHello()}</p>`;
app.appendChild(message);

const computeAdd = document.createElement('div')
computeAdd.innerHTML = `<p>Computing (5 + 3) => ${calculate(5, 3)}</p>`;
app.appendChild(computeAdd);