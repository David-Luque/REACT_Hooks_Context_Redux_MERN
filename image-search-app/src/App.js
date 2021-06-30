import React, { useState, useEffect } from 'react';
import Form from './components/Form';

function App() {

  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);


  useEffect(()=>{
    
    const apiCall = async ()=>{
      if(search === '') return;

      const imagesPerPage = 30;
      const key = "22305269-d88317b4a6fea00b1a1629c2f";
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesPerPage}`

      const response = await fetch(url);
      const result = await response.json();

      setResults(result.hits)
    };

    apiCall();

  }, [search]);


  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Image searcher</p>
        <Form setSearch={setSearch}/>
      </div>
    </div>
  );
}

export default App;
