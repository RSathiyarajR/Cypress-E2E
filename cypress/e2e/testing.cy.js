describe('Login Test', () => {

    //Open Cypress | Set ".only"
    it('should login using data from Excel', () => {
    
    cy.visit('https://practicetestautomation.com/practice-test-login/')    
    cy.readExcelData('C:\\Users\\thani\\Cypress\\ExcelUpload.xlsx', 'Sheet1').then((data)=>{
    const username = data[1][0]    
    const password = data[1][1]
    cy.get('input[name="username"]').type(username)
    cy.get('input[name="password"]').type(password)
    cy.get('#submit').click()
    cy.get('.post-title').should('have.text', 'Logged In Successfully')   
    })
    })
    })