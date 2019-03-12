import {cypress} from '../support/model/instance';

describe('cypress', () => {
    beforeEach(() => {
        cy.visit('')
    })

    it('cypress',()=>{
        cypress.byId('check').isVisible()
        cypress.login('carol','123')
        cypress.validateErrorMessage('First')
        cypress.validateMainPage('localhost')
        cypress.inputTypebyLabel('Senha','136')
        cypress.clickInputbyId('check')
        cypress.focusInputbyLabel('Senha')
        cypress.headerContent('Last')
        cypress.lineContent(2,'Jacob')
        cypress.cellContent(2,1,'Thornton')
    })

   
})