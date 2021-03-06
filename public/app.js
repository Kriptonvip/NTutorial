import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
const form = document.querySelector('.new-item-form'); // указываем что этот элемент является form
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom'); // указываем что этот элемент является Input 
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//List pemlate intance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
