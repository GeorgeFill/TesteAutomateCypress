describe('Exemplu unde', () =>{

// Testam sa verificam un segment din url

// it('verific daca un URL contine ceva', () =>{
//     cy.visit('https://www.digi24.ro/stiri/externe/un-handbalist-care-a-jucat-in-romania-a-murit-in-cutremurul-din-turcia-sub-daramaturi-au-fost-gasiti-si-copilul-si-sotia-insarcinata-2251271');

//     cy.url().should('include', '/stiri/') // verifica un segment, primul dupa .ro/
// })



// // Testul cu delay

// it('asteapta 10 secunde', ()=> {

//     cy.visit('https://www.google.com');

//     cy.get('#L2AGLb').click();

//     cy.wait(10000); // asteaota 10 secunte...10 secunde 1000 = 1 secunda

//     cy.get('.gLFyf').type('Au trecut 10 secunde')
// })


// Testul cu selector de timp atribut

// it('selectez folosind un atribuit', () => {
//     cy.visit('https://www.google.com');

//     cy.get ('#L2AGLb').click();

//     cy.get('[alt="Google"]').should('be.visible'); // puteam folosi un imput sau class, dar am folosit alt, deci am pus in paranteze drepte


// })

// //Testul screenshot pe pagina
// it('fac un screenshot la pagina', ()=>{
//     cy.visit('https://www.google.com');

//     cy.screenshot(); //Face screenshot intr un folder default

// })


//Testul constanta si verificare continut input
it('verific o valoare din input', () => {

    cy.visit('https://www.google.com');
    
    cy.get ('#L2AGLb').click();
    const googleSearch = cy.get('.gLFyf');   //constanta

    googleSearch.type('123');
    googleSearch.should('have.value', '123');   //Asertion contine textul
})

// Testul de verificare existenta a unei clase pe un element static

it('verific o valoare din input', ()=>{

    cy.visit('https://www.libris.ro/');

    cy.get('#autoCompleteButton').should('have.class', 'onSearchClick');  //Exista clasa pe buton?
})




})