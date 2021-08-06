import React, { useState } from 'react';
import Router from 'next/router';
import Layout from '../components/layout/Layout';
import { css } from '@emotion/react';
import { Form, Field, InputSubmit, Error } from '../components/ui/Form';

import firebase from '../firebase';

//validations
import useValidation from '../hooks/useValidation';
import validateLogin from '../validation/validateLogin';

const INITIAL_STATE = {
  email: '',
  password: ''
}

export default function Login() {

  const [ error, setError ] = useState(false);
  
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
  } = useValidation(INITIAL_STATE, validateLogin, loginFn);

  const { email, password } = values;

  async function loginFn() {
    try {
      await firebase.login(email, password);
      Router.push('/');
    } catch (error) {
      console.error("There was an error login user", error);
      setError(error.message);
    }
  }
  

  return ( 
    <div>
      <Layout>
        <>
            <h1
              css={css`
                text-align: center;
                margin-top: 5rem;
              `}
            >Login</h1>
            
            <Form
              onSubmit={handleSubmit}
            >
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

                { error && <Error>{ error }</Error> }

                <InputSubmit type="submit" value="Login"/>
            
            </Form>
        </>
      </Layout>
    </div>
  )
};  