import React, { useState } from 'react';
import Router from 'next/router';
import Layout from '../components/layout/Layout';
import { css } from '@emotion/react';
import { Form, Field, InputSubmit, Error } from '../components/ui/Form';

import firebase from '../firebase';

//validations
import useValidation from '../hooks/useValidation';
import validateCreateAccount from '../validation/validateCreateAccount';


const INITIAL_STATE = {
  name: '',
  email: '',
  password: ''
}


export default function CreateAccount() {

  const [ error, setError ] = useState(false);
  
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
  } = useValidation(INITIAL_STATE, validateCreateAccount, createNewAccount);

  const { name, email, password } = values;

  async function createNewAccount() {
    try {
      await firebase.register(name, email, password) //"register" can be anything
      Router.push('/');

    } catch(error) {
      console.error("There was an ERROR creating user: ", error);
      setError(error.message);
    }
  };
  

  return ( 
    <div>
      <Layout>
        <>
            <h1
              css={css`
                text-align: center;
                margin-top: 5rem;
              `}
            >Create acount</h1>

            { error && <Error>{ error }</Error> }
            
            <Form
              onSubmit={handleSubmit}
            >
              <Field>
                  <label htmlFor="name">Name</label>
                  <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      name="name"
                      value={name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                  />
              </Field>
              { errors.name && <Error>{errors.name}</Error> }

              <Field>
                  <label htmlFor="email">Email</label>
                  <input
                      type="email"
                      id="email"
                      placeholder="Your email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                  />
              </Field>
              { errors.email && <Error>{errors.email}</Error> }

              <Field>
                  <label htmlFor="password">Password</label>
                  <input
                      type="password"
                      id="password"
                      placeholder="Your password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                  />
              </Field>
              { errors.password && <Error>{errors.password}</Error> }

              <InputSubmit type="submit" value="Create account"/>
            </Form>
        </>
      </Layout>
    </div>
  )
}; 