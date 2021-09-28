import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form.js';
import Song from './components/Song';
import ArtistInfo from './components/ArtistInfo';
import axios from 'axios';

function App() {

  const [ lyricSearch, setLyricSearch ] = useState({});
  const [ lyrics, setLyrics ] = useState('');
  const [ artistInfo, setArtistInfo ] = useState({});

  useEffect(()=>{
    if(Object.keys(lyricSearch).length === 0) return;
    const lyricsInfoRequest = async ()=>{
      const { artist, song } = lyricSearch;
      //use Promise.all() to make both GET request at same time, and continue when both are done
      const [ lyric, artistInfoApi ] = await Promise.all([
        axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`),
        axios.get(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`)
      ]);
      setLyrics(lyric.data.lyrics);
      setArtistInfo(artistInfoApi.data.artists[0])
    };
    lyricsInfoRequest();
  }, [lyricSearch]);



  return (
    <Fragment>
      <Form  setLyricSearch={setLyricSearch} />
      <div className="container mt-5">
        <div className="row">
          <div col-md-6>
            <ArtistInfo
              artistInfo={artistInfo}
            />
          </div>
          <div col-md-6>
            <Song 
              lyrics={lyrics}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
