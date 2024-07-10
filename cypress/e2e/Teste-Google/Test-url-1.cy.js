describe('Suita 1', () => {

    //testul 1

    it('test 1', () => {
        cy.visit('https://google.com'); // prin acest cod vizitam url ul, practic deschide pagina web si atat
        cy.get('#L2AGLb').click();
        cy.get('.gLFyf').type('vlog de it').type('{enter}'); //daca este clasa pui . in fata, daca este input, pui # in fata, pentru restul claselor, pui []
    
    
        cy.get('#result-stats').should('exist');   //prin libraria chai, folosim functia should('exist') pentru a vedea daca exista un produs

    })
})


// Testam cum pe EMAG putem vedea butoul Favorite si Emag Help


// Tagurile in HTML
// < />
// <div> </div>
// Selectorul
// Ordinea datelor in cypresss: data-cy , data-test , data-testid , id , class , tag (div, img, buttom)
// Daca vrei ca testele sa fie mai usoare, roaga prbramatorii sa adauge acesti selectori in coduri programate

