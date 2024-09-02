// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('addingMultiProducts', (product) => {
cy.get('app-card').each(($products)=>{
if($products.text().includes(product)){
cy.wrap($products).find('button').click() 
}
})
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//require('cypress-iframe')

const XLSX = require('xlsx')

Cypress.Commands.add('readExcelData', (filePath, sheetName) => {
return cy.readFile(filePath, 'binary').then((data) => {
const workbook = XLSX.read(data, { type: 'binary'
})

const worksheet = workbook.Sheets[sheetName]
return XLSX.utils.sheet_to_json(worksheet, {header: 1 
    
})
})
})