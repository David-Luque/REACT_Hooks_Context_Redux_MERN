import React, { useState } from 'react';
import styled from '@emotion/styled';

const Field = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    margin-top: 2rem;
    transition: background-color .3s ease;

    &:hover {
        cursor: pointer;
        background-color: #26c6da;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;


const Form = () => {

    const [data, setData] = useState({
        model: '',
        year: '',
        plan: ''
    });

    const [error, setError] = useState(false);

    //extract data from state
    const  { model, year, plan } = data;

    //set input data in state

    const handleChange = e => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        //validate
        if(model.trim() === '' || year.trim() === '' || plan.trim() === ''){
            setError(true);
            return;
        }

        setError(false);

        /////Create object/////
        // obtain difference in years and subtract 3% for each

        //american +15% - asian +5% - european +30%
        
        // basic plan +20% - full plan +50%

        // estimate total


        //send to parent and reset form

    }



    return (
        <form
            onSubmit={handleSubmit}
        >

            {error && <Error> All fields are required </Error>}

            <Field>
                <Label>Model</Label>
                <Select
                    name="model"
                    value={model}
                    onChange={handleChange}
                >
                    <option value="">-- Select model --</option>
                    <option value="American">American</option>
                    <option value="European">European</option>
                    <option value="Asian">Asian</option>
                </Select>
            </Field>
            <Field>
                <Label>Year</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Field>
            <Field>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basic"
                    checked={plan === "basic"}
                    onChange={handleChange}
                />Basic
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="full"
                    checked={plan === "full"}
                    onChange={handleChange}
                />Full
            </Field>
            <Button type="submit">Calculate</Button>
        </form>
    );
}
 
export default Form;