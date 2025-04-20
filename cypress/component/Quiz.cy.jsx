import Quiz from "../../client/src/components/Quiz"
import { mount } from 'cypress/react18'

describe ('Quiz Component', () => {
    beforeEach(() => {
        cy.intercept({
            method: 'GET', 
            url: '/api/questions/random'
        },
        {
            fixture: 'questions.json',
            statusCode:200
        }
    ).as('getRandomQuestion')
    });

it('should start the quiz and display the 1st question', () => {
    mount(<Quiz/>);
    cy.get('button').contains('Start Quiz').click();
    cy.get('.card').should('be.visible');
    cy.get('h2').should('not.be.empty');
})

});