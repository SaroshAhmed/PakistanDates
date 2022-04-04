import './App.css';
import List from './List';
import data from './Data';
import { useState } from 'react';

function App() {
  const [people, setpeople]= useState(data)
  return (
    <main className="App">
      <section className='Container'>
        <h5 className='h5'>{people.length} Events in 2022
          <List people={people}></List>
          <button className='clear' onClick={()=>setpeople([])}>Clear</button>
        </h5>
      </section>
    <div >
      </div></main>
  );
}

export default App;
