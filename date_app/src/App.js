import React, { Fragment, useState, useEffect } from 'react'; 
import Form from './components/Form';
import Date from './components/Date';

function App() {

  let initialDates = JSON.parse(localStorage.getItem('allDates'));
  if(!initialDates){
    initialDates = []
  }

  const [allDates, setAllDates] = useState(initialDates);

  useEffect( ()=>{ 
    let initialDates = JSON.parse(localStorage.getItem('allDates'));
    
    if(initialDates){
      localStorage.setItem('allDates', JSON.stringify(allDates));
    } else {
      localStorage.setItem('allDates', JSON.stringify([]));
    }
  }, [allDates] );

  const createDate = date => {
    setAllDates([...allDates, date])
  };

  const deleteDate = id => {
    const newDates = allDates.filter(date => date.id !== id);
    setAllDates(newDates);
  };

  //conditional title
  const title = allDates.length === 0 ? "No dates" : "List of dates"

  return (
    <Fragment>
      <h1>Veterinary appointment scheduler</h1>
      
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form 
              createDate= {createDate}
            />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {allDates.map(date => (
              <Date
                key={date.id}
                date={date}
                deleteDate={deleteDate}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
