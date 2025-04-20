describe('Quiz Component', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should start the quiz and display the first question', () => {
      cy.get('button').contains('Start Quiz').click();
      cy.get('.card').should('be.visible');
      cy.get('h2').should('not.be.empty');
    });
});