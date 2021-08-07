import React, { useState, useContext } from 'react';
import Router, { useRouter } from 'next/router';
import FileUploader from 'react-firebase-file-uploader';
import Layout from '../components/layout/Layout';
import { css } from '@emotion/react';
import { Form, Field, InputSubmit, Error } from '../components/ui/Form';

import { FirebaseContext } from '../firebase';

//validations
import useValidation from '../hooks/useValidation';
import validateNewProduct from '../validation/validateNewProduct';

const INITIAL_STATE = {
  name: '',
  enterprise: '',
  image: '',
  url: '',
  description: ''
}


export default function NewProduct() {

  //images state
  const [ imageName, setImageName ] = useState('');
  const [ upload, setUpload ] = useState(false);
  const [ progress, setProgress ] = useState(0);
  const [imageURL, setImageURL] = useState('')
  
  //error state
  const [ error, setError ] = useState(false);
  
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
  } = useValidation(INITIAL_STATE, validateNewProduct, createNewProduct);

  const { name, enterprise, image, url, description } = values;

  //routing hook to redirect
  const router = useRouter();

  //context with firebase CRUD operations
  const { user, firebase } = useContext(FirebaseContext);


  async function createNewProduct() {
    //if no auth user, redirect to login page
    if(!user) {
      return router.push('/login')
    }
    //create object
    const product = {
      name,
      enterprise,
      imageURL,
      url,
      description,
      votes: 0,
      comments: [],
      createdAt: Date.now()
    };
    await firebase.db.collection('products').add(product);

    return router.push('/');
  };

  const handleUploadStart = ()=>{
    setProgress(0);
    setUpload(true);
  };

  const handleProgress = progress => {
    setProgress({ progress });
  };

  const handleUploadError = error => {
    setUpload(error);
    console.error(error);
  };

  const handleUploadSuccess = name => {
    setProgress(100);
    setUpload(false);
    setImageName(name);
    firebase
      .storage
        .ref('products')
        .child(name)
        .getDownloadURL()
        .then(url => {
          console.log(url);
          setImageURL(url);
        })
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
            >Create new product</h1>
            
            <Form
              onSubmit={handleSubmit}
            >
              <fieldset>
                <legend>General info</legend>
                <Field>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Your product name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Field>
                { errors.name && <Error>{errors.name}</Error> }

                <Field>
                    <label htmlFor="enterprise">Enterprise</label>
                    <input
                        type="text"
                        id="enterprise"
                        placeholder="Enterprise name"
                        name="enterprise"
                        value={enterprise}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Field>
                { errors.enterprise && <Error>{errors.enterprise}</Error> }

                <Field>
                    <label htmlFor="image">Image</label>
                    <FileUploader
                      accept="image/*"
                      id="image"
                      name="image"
                      randomizeFilename
                      storageRef={firebase.storage.ref('products')}
                      onUploadStart={handleUploadStart}
                      onUploadError={handleUploadError}
                      onUploadSuccess={handleUploadSuccess}
                      onProgress={handleProgress}
                    />
                </Field>
                { errors.image && <Error>{errors.image}</Error> }

                <Field>
                    <label htmlFor="url">URL</label>
                    <input
                        type="url"
                        id="url"
                        name="url"
                        placeholder="Your product URL"
                        value={url}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Field>
                { errors.url && <Error>{errors.url}</Error> }
              </fieldset> 

              <fieldset>
                <legend>
                  About your product
                </legend>
                <Field>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="About your product"
                        value={description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Field>
                { errors.description && <Error>{errors.description}</Error> }
              </fieldset>

                { error && <Error>{ error }</Error> }

                <InputSubmit type="submit" value="Create product"/>
            
            </Form>
        </>
      </Layout>
    </div>
  )
}; 