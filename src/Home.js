import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Details from './Details';
import Array from './data.js';

function Home() {
  return (
    <div className="App">
        {
            Array.map((obj, idx) => {
              return <Link to={`tree-${idx+1}`}>Tree-{idx+1}</Link>
            })
          }
    </div>
  );
}

export default Home;