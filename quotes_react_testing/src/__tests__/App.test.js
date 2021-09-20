import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';


test('App works well for the first time', ()=>{
    render(<App/>);

    const appTitle = screen.getByTestId('app-title');
    expect(appTitle).toBeInTheDocument();
    expect(appTitle.textContent).toBe('Administrador de Pacientes');
    expect(appTitle.tagName).toBe('H1');

    expect(screen.getByText('Crear Cita')).toBeInTheDocument();  
    expect(screen.getByText('No hay citas')).toBeInTheDocument();
})


test('<App/> Create cita and verify App dinamic heading', ()=>{
    render(<App/>)

    const pet = screen.getByTestId('input-pet');
    const owner = screen.getByTestId('input-owner');
    const date = screen.getByTestId('input-date');
    const time = screen.getByTestId('input-time');
    const symptoms = screen.getByTestId('input-symptoms');

    userEvent.type(pet, 'Hook');
    userEvent.type(owner, 'David');
    userEvent.type(date, '2021-09-18');
    userEvent.type(time, '09:25');
    userEvent.type(symptoms, 'Low activity');

    //click on submit button
    const submitButton = screen.getByTestId('btn-submit');
    userEvent.click(submitButton);

    
    //use "query" when element may exist or not; "get" when it must exist
    const alert = screen.queryByTestId('alert');
    expect(alert).not.toBeInTheDocument();

    //check for the dinamic title
    expect(screen.getByTestId('dinamic-title').textContent).toBe('Administra tus Citas');
    expect(screen.getByTestId('dinamic-title').textContent).not.toBe('No hay citas')
});


test('App/> Verify citas in DOM', async ()=>{
    render(<App/>);
    const citas =  await screen.findAllByTestId('cita');
    //find is asyncrounous, and it await to DOM changes
    //in this case to find more than one element, all with 'cita' TestId
    
    //console.log(citas.toString())
    //do not show the content but we can see that it is an html element
    
    expect(citas).toMatchSnapshot()
    //snapshots create a file with the content and we can verify it

    const deleteButton = screen.getByTestId('btn-delete');
    expect(deleteButton).toBeInTheDocument();
    expect(deleteButton.tagName).toBe('BUTTON');

    //verify cita
    expect(screen.getByText('Hook')).toBeInTheDocument()
});

test('<App/> Delete cita', ()=>{
    render(<App/>);
    
    const deleteButton = screen.getByTestId('btn-delete');
    
    //verify that button exist
    expect(deleteButton).toBeInTheDocument();
    expect(deleteButton.tagName).toBe('BUTTON');
    
    //click on delete button
    userEvent.click(deleteButton);

    //verify that button do not exist
    expect(deleteButton).not.toBeInTheDocument();
    
    //verify that cita do not exist
    expect(screen.queryByTestId('cita')).not.toBeInTheDocument();
});