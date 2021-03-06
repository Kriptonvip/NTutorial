import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement; // указываем что этот элемент является form

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;// указываем что этот элемент является Input 
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//List pemlate intance

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e:Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber); 
  } else {
    doc = new Payment (toFrom.value, details.value, amount.valueAsNumber); 
  }
   list.render(doc, type.value, 'end');
})
