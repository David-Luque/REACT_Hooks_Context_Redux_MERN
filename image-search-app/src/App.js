import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import ImagesList from './components/ImagesList';

function App() {

  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  useEffect(()=>{
    
    const apiCall = async ()=>{
      if(search === '') return;

      const imagesPerPage = 30;
      const key = process.env.API_KEY;
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesPerPage}&page=${currentPage}`

      const response = await fetch(url);
      const result = await response.json();

      setResults(result.hits)

      //obtain total of pages needed
      const calcPages = Math.ceil(result.totalHits / imagesPerPage);
      setTotalPages(calcPages)

      //scroll screen view to beginning
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({ behavior: 'smooth' });
    };

    apiCall();

  }, [search, currentPage]);



  const goToPrevPage = ()=>{
    
    if(currentPage === 1) return;
    
    const newCurrentPage = currentPage - 1;
    setCurrentPage(newCurrentPage);
  };

  const goToNextPage = ()=>{
    
    if(currentPage === totalPages) return;
    
    const newCurrentPage = currentPage + 1;
    setCurrentPage(newCurrentPage);
  };



  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Image searcher</p>
        <Form setSearch={setSearch}/>
      </div>
      <div className="row justify-content-center">
        <ImagesList
          imagesData={results}
        />

        {(currentPage === 1) ? null : (
          <button
            type="button"
            className="btn btn-info mr-1"
            onClick={goToPrevPage}
          >
            &laquo; Prev
          </button>
        )}
        
        {(currentPage === totalPages) ? null : (
          <button
            type="button"
            className="btn btn-info"
            onClick={goToNextPage}
          >
            Next &raquo;
          </button>
        )}

      </div>
    </div>
  );
}

export default App;
