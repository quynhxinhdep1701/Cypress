{/* <referency types="Cypress" /> */ }

describe('Firt Test', function () {
    it('My First Test', function () {
        cy.visit("https://client-portal-dev-ukpc.azurewebsites.net");
        cy.get('#outlined-required').type('diemquynh170101@gmail.com')
        cy.get('#outlined-required11').type('quynh12345')
    })
}

)