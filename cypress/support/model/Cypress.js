/// <reference types="Cypress" />

export default class Cypress {

    _cy = cy;

    constructor() { }

    goTo = (url = '') =>{
        this._cy = this._cy.visit(`${url}`)
    }

    byId = (id = '') => {
        this._cy = this._cy.get(`#${id}`);
        return this;
    }

    byClassName = (cn = '') => {
        this._cy = this._cy.get(`.${cn}`);
        return this;
    }

    byLabel = (lbl = '') => {
        this._cy = this._cy.get(`${lbl}`).next();
        return this;
    }

    byName = (nm = '') => {
        this._cy = this._cy.get(`name=${nm}`);
        return this;
    }

    byType = (tp = '') => {
        this._cy = this._cy.get(`type=${tp}`);
        return this;
    }

    byContent = (ct = '')=>{
        this._cy = this._cy.contains(`${ct}`)
        return this;
    }

    byCSSSelector = (css = '')=>{
        this._cy = this._cy.get(`${css}`)
        return this;
    }

    byCSSSelectorPosition = (css = '', position = '')=>{
        this._cy = this._cy.get(`${css}`).eq(`${position}`)
        return this;
    }

    isVisible = ()=>{
        this._cy = this._cy.should('be.visible')
        return this;
    }

    isEnabled = ()=>{
        this._cy = this._cy.should('be.enabled')
        return this;
    }

    notVisible = () =>{
        this._cy = this._cy.should('not.be.visible')
        return this;
    }

    isDisabled = () =>{
        this._cy = this._cy.should('be.disabled')
        return this;
    }

    login = (username = '', password = '') =>{
        this._cy = this._cy.get('input:first').type(`${username}`)
        this._cy = this._cy.get('input').eq(1).type(`${password}`)
        return this;
    }

    validateMainPage = (val='') =>{
        this._cy =  this._cy.url().should('contain',val)
        return this;
    }

    validateErrorMessage = (err='')=>{
        this._cy =  this._cy.get('body').contains(err)
        return this;
    }

    validateSuccessMessage = (success='')=>{
        this._cy =  this._cy.get('body').contains(success)
        return this;
    }

    submit = ()=>{
        this._cy =  this._cy.get('form').submit()
        return this;
    }

    buttonClick = () =>{
        this._cy =  this._cy.get('button').click()
        return this;
    }

    buttonClickByContent = (content='') =>{
        this._cy =  this._cy.contains(`${content}`).click()
        return this;
    }

    buttonClickById = (id='') =>{
        this._cy =  this._cy.get(`#${id}`).click()
        return this;
    }

    inputTypebyId = (id='',text='') =>{
        this._cy = this._cy.get(`input#${id}`).type(`${text}`)
        return this;
    }

    inputTypebyPosition = (position='',text='') =>{
        this._cy = this._cy.get('input').eq(`${position}`).type(`${text}`)
        return this;
    }

    inputTypebyLabel = (lbl='',text='') =>{
        this._cy = this._cy.get('label').contains(`${lbl}`).next().type(`${text}`)
        return this;
    }

    clickInputbyId = (id='') =>{
        this._cy = this._cy.get(`input#${id}`).click()
        return this;
    }

    clickInputbyPosition = (position='') =>{
        this._cy = this._cy.get('input').eq(`${position}`).click()
        return this;
    }

    clickInputbyLabel = (lbl='') =>{
        this._cy = this._cy.get('label').contains(`${lbl}`).next().click()
        return this;
    }

    focusInputbyId = (id='') =>{
        this._cy = this._cy.get(`input#${id}`).focus()
        return this;
    }

    focusInputbyPosition = (position='') =>{
        this._cy = this._cy.get('input').eq(`${position}`).focus()
        return this;
    }

    focusInputbyLabel = (lbl='') =>{
        this._cy = this._cy.get('label').contains(`${lbl}`).next().focus()
        return this;
    }

    headerContent = (name='')=>{
        this._cy = this._cy.get('thead').should('contain',`${name}`)
        return this;
    }

    lineContent = (line='',name='')=>{
        this._cy = this._cy.get('tr').eq(line).should('contain',`${name}`)
        return this;
    }

    cellContent = (line='',cell,name='')=>{
        this._cy = this._cy.get('tr').eq(line).within(()=>{
            cy.get('td').eq(`${cell}`).should('contain',`${name}`)
        })
        return this;
    }

}