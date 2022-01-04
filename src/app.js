"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const invoice_js_1 = require("./classes/invoice.js");
const payment_js_1 = require("./classes/payment.js");
const ListTemplate_js_1 = require("./classes/ListTemplate.js");
const form = document.querySelector('.new-item-form'); // указываем что этот элемент является form
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom'); // указываем что этот элемент является Input 
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//List pemlate intance
const ul = document.querySelector('ul');
const list = new ListTemplate_js_1.ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new invoice_js_1.Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new payment_js_1.Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
