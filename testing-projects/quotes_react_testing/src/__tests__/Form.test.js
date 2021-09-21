import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Form from '../components/Form';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

const crearCita = jest.fn();

//to clean mounted component after every "test" function before another test start mounting another component
afterEach( cleanup );
//in last versions it is not necessary, but it depends 

//in Jest we can write "it" insted of "test" on this function
test('<Form /> Load form and check that everything its ok', ()=>{
    //TO CHECK THAT COMPONENT WAS MOUNTED CORRECTLY AND SEE THEIR HTML STRUCTURE
    //const wrapper = render(<Form/>);
    //wrapper.debug();

    //OLD WAY TO DO
    //const { getByText } = render(<Form />);
    //expect(getByText('Crear Cita')).toBeInTheDocument();

    //NEW WAY TO DO => with "screen"
    render(<Form crearCita={crearCita} />);
    
    expect(screen.getByText('Crear Cita')).toBeInTheDocument();
    
    //HEADING
    expect(screen.getByTestId('title')).toBeInTheDocument();
    //console.log(screen.getByTestId('title'))
    const title = screen.getByTestId('title');
    expect(title.tagName).toBe('H2');
    expect(title.tagName).not.toBe('H1');
    expect(title.textContent).toBe('Crear Cita');

    //SUBMIT BUTTON
    const submitButton = screen.getByTestId('btn-submit');
    expect(submitButton.tagName).toBe('BUTTON');
});

//we can integrate this validation in previous "test()" or do in another one like this.
//It is most recommended in one larger test usually
test("<Form/> Form validation", ()=>{
    render(<Form crearCita={crearCita} />);
    const submitButton = screen.getByTestId('btn-submit');
    //click on submit button
    fireEvent.click(submitButton);
    //check alert
    const alertMessage = screen.getByTestId('alert');
    expect(alertMessage).toBeInTheDocument();
    expect(alertMessage.textContent).toBe("Todos los campos son obligatorios");
    expect(alertMessage.tagName).toBe('P');
});


test("<Form/> Form validation", ()=>{
    render(<Form crearCita={crearCita} />);
    
    const pet = screen.getByTestId('input-pet');
    const owner = screen.getByTestId('input-owner');
    const date = screen.getByTestId('input-date');
    const time = screen.getByTestId('input-time');
    const symptoms = screen.getByTestId('input-symptoms');

    //WHITH "fireEvent" => PREVIOUS WAY
    // fireEvent.change(pet, {
    //     target: { value: 'Hook' }
    // });
    // fireEvent.change(owner, {
    //     target: { value: 'David' }
    // });
    
    //WHITH "userEvent" => NEW WAY
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

    //create cita and check that function has been called
    expect(crearCita).toHaveBeenCalled();
    expect(crearCita).toHaveBeenCalledTimes(1);

});