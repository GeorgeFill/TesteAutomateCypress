//Test Login Linkedil.com

// cand pun aceste '' in paranteze, inseaman ca adaugam functii string

describe('AAAAAA', () => {

    it('BBB', () => {
        cy.visit('https://linkedin.com');
   
        cy.get('.nav__button-secondary');

        cy.get('#session_key').type('Myaccount@gmail.com');

        cy.get('#session_password').type('xxxxxxxxxx');

        cy.get('.justify-between > .btn-md').click();

    

    })


})    