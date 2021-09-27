import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form.js';
import axios from 'axios';

function App() {

  const [ lyricSearch, setLyricSearch ] = useState({});
  const [ lyrics, setLyrics ] = useState('');

  useEffect(()=>{
    if(Object.keys(lyricSearch).length === 0) return;
  
    const lyricRequest = async ()=>{
      const { artist, song } = lyricSearch;
      const result = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`);
      setLyrics(result.data.lyrics)
    }
    lyricRequest();
  }, [lyricSearch]);

  return (
    <Fragment>
      <Form  setLyricSearch={setLyricSearch} />
    </Fragment>
  );
}

export default App;
