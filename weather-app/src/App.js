import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Climate from './components/Climate';
import Error from './components/Error';


function App() {

  const [search, setSearch] = useState({
    city: '',
    country: ''
  });
  const { city, country } = search;

  const [requested, setRequested] = useState(false);
  const [result, setResult] = useState({});
  const [error, setError] = useState(false);


  useEffect(()=>{
    if(requested) {
      const requestApi = async ()=>{
        const appID = process.env.API_ID;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appID}`;
        const response = await fetch(url);
        const resultData = await response.json();
  
        setResult(resultData);
        setRequested(false);

        //detect if there was good result in request
        if(result.cod === 404) {
          setError(true)
        } else {
          setError(false)
        }
      };
      requestApi();
    }
  },[requested]);

  
  let component;
  if(error) {
    component = <Error
                  message="No results"
                />
  } else {
    component = <Climate
                  result={result}
                />
  }


  return (
    <Fragment>
      <Header
        title="Weather react app"
      />

      <div className="container-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                setSearch={setSearch}
                setRequested={setRequested}
              />
            </div>
            <div className="col m6 s12">
              {component}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
