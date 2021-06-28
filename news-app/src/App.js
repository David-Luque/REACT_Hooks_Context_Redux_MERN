import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import NewsList from './components/NewsList';

function App() {

  const [category, setCategory] = useState('');
  const [news, setNews] = useState([]);


  useEffect(()=>{
    const apiCall = async ()=>{
      const url = `http://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.API_KEY}`;
      const apiResult = await fetch(url);
      const news = await apiResult.json();
      setNews(news.articles)
    };
    apiCall();
  }, [category]);

  return (
    <Fragment>
      <Header title="News finder"/>
      <div className="container white">
        <Form
          setCategory={setCategory}
        />
      </div>

      <NewsList
        news={news}
      />

    </Fragment>
  );
}

export default App;
