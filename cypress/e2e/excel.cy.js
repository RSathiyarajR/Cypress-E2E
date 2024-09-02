// import xlsx from 'xlsx';

// describe('Login Test', () => {
//   it('should login using data from Excel', () => {
//     cy.visit('https://practicetestautomation.com/practice-test-login/')
//     cy.readFile('C:\\Users\\thani\\Cypress\\ExcelUpload.xlsx').then((file) => {
//       const workbook = xlsx.read(file, { type: 'array' });
//       const sheetName = workbook.SheetNames[0];
//       const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
//       const username = data[0].username;
//       const password = data[0].password;
//       cy.get('input[name="username"]').type(username)
//       cy.get('input[name="password"]').type(password)
//       cy.get('#submit').click()
//       cy.get('.post-title').should('have.text', 'Logged In Successfully')
//     })
//   })
// })

// import xlsx from 'xlsx';

// describe('Login Test', () => {
//   it('should login using data from Excel', () => {
//     cy.visit('https://practicetestautomation.com/practice-test-login/')
//     cy.readFile('C:\\Users\\thani\\Cypress\\ExcelUpload.xlsx').then((file) => {
//       console.log('File:', file);
//       try {
//         const workbook = xlsx.read(file, { type: 'array' });
//         console.log('Workbook:', workbook);
//         const sheetName = workbook.SheetNames[0];
//         const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
//         console.log('Data:', data);
//         const username = data[0].username;
//         const password = data[0].password;
//         cy.get('input[name="username"]').type(username)
//         cy.get('input[name="password"]').type(password)
//         cy.get('#submit').click()
//         cy.get('.post-title').should('have.text', 'Logged In Successfully')
//       } catch (error) {
//         console.error('Error reading Excel file:', error);
//         throw error;
//       }
//     })
//   })
// })

import * as xlsx from 'xlsx';

describe('Login Test', () => {
  it('should login using data from Excel', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    cy.readFile('C:\\Users\\thani\\Cypress\\ExcelUpload.xlsx').then((file) =>{
      const workbook = xlsx.read(file,{type:'array'});
      const sheetName = workbook.SheetNames[1];
      const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
      const username = data[0].username;
      const password = data[0].password;
      cy.get('input[name="username"]').type(username)
      cy.get('input[name="password"]').type(password)
      cy.get('#submit').click()
      cy.get('.post-title').should('have.text', 'Logged In Successfully')
    })
  })
})