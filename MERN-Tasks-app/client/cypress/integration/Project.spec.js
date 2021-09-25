/// <reference types="cypress" />

describe('Admin', ()=>{
    
    it('<Login />, Authentication', ()=>{
        cy.visit('/');

        //fill the form
        cy.get('[data-cy="email-input"]').type('q@q.com')
        cy.get('[data-cy="password-input"]').type('qqqqqq')
        cy.get('[data-cy="login-submit"]').click()
    });
    
    
    
    
    it('<Projects /> - Validate new project input', ()=>{
        //alert validation
        cy.get('[data-cy="btn-new-project"]').click()
        cy.get('[data-cy="submit-new-project"]').click()
        cy.get('[data-cy="alert"]')
          .should('exist')
          .should('have.class', 'message error')
          .invoke('text').should('eq', 'You must provide a project name')
    });

    it('<Projects /> - Create new project', ()=>{
        //create the project
        cy.get('[data-cy="input-new-project"]').type('Virtual shop')
        cy.get('[data-cy="submit-new-project"]').click()
        //select the project
        cy.get('[data-cy="projects-list"] li:nth-child(1) button').click() //=> this is similar to query selector
    });

    it('<FormTask /> - Validate and create task', ()=>{
        //submit button click
        cy.get('[data-cy="submit-task"]').click()
        //alert validation
        cy.get('[data-cy="alert"]')
          .should('exist')
          .should('have.class', 'message error')
          .invoke('text').should('eq', 'Task name is required')
        //create tasks
        cy.get('[data-cy="input-task"]').type('Define layout')
        cy.get('[data-cy="submit-task"]').click()
        cy.get('[data-cy="input-task"]').type('Define typography')
        cy.get('[data-cy="submit-task"]').click()
        cy.get('[data-cy="input-task"]').type('Define colors')
        cy.get('[data-cy="submit-task"]').click()
    });

    it('<ListTask /> - Complete/Uncomplete, Edit and Delete task', ()=>{

    });
});