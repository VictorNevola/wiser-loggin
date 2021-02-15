describe('The Loggin Page Render', () => {
    it('successfully loads', () => {
      cy.visit('/')
    });

    it('Exist Title h1', () => {
        cy.get('h1').contains("Olá, seja bem-vindo!")
    });

    it('Exist form, inputs of email and Password', () => {
        cy.get('form')
        cy.get('input[name="emailUser"]')
        cy.get('input[name="password"]')
    });

    it('Click Btn Register with inputs emptys and return error in inputs', () => {
        cy.get('input[value="Entrar"]').click({force: true})
        cy.get('input[name="emailUser"]').should('have.value', '').parent('div').should('have.css', 'border-color').and('equal', 'rgb(255, 55, 127)')
        cy.get('input[name="password"]').should('have.value', '').parent('div').should('have.css', 'border-color').and('equal', 'rgb(255, 55, 127)')
    });

    it('Click Btn register with inputs filled, and return modal Alert success', () => {
        cy.get('input[name="emailUser"]').type('victornevolapn@gmail.com')
        cy.get('input[name="password"]').type('123')
        cy.get('input[value="Entrar"]').click({force: true})
        cy.get('#modal-alert').should('have.css', 'background-color').and('equal', 'rgb(26, 179, 148)')
    });

});