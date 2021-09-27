import React, { useState } from 'react';

const Form = ({ setLyricSearch }) => {

    const [ search, setSearch ] = useState({
        artist: '',
        song: ''    
    });
    const { artist, song } = search;

    const [ error, setError ] = useState(false);

    const handleChange = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        //validation
        if( artist.trim() === '' || song.trim() === '') {
            setError(true);
            return;
        };
        setError(false)
        setLyricSearch(search)
    };
    
    return (
        <div className="bg-info">

            <div className="container">
                <div className="row">
                    <form
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit={handleSubmit}
                    >
                        <fieldset>
                            <legend className="text-center">
                                Song lyrics finder
                            </legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artist</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Artist name"
                                            value={artist}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Song</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="song"
                                            placeholder="Song name"
                                            value={song}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                className="btn btn-primary float-right"
                                type="submit"
                            > Search </button>
                        </fieldset>

                        { error && <p className="alert alert-danger text-center p-2 mt-3">All fields are required</p>}

                    </form>
                </div>
            </div>            
        </div>
    );
}
 
export default Form;