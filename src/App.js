import {Routes, Route, Link} from 'react-router-dom';
import Array from './data.js';
import Details from './Details';
import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          {
            Array.map((obj, idx) => {
              return <Route key={idx} path={`/tree-${idx+1}`} element={<Details 
                audio={obj.Audio}
                image={obj.ImageURL} 
                name={obj.Name} 
                age={obj.Age} 
                area={obj.Area} 
                height={obj.Height}
                latitude={obj.Latitude}
                longitude={obj.Longitude}
                plantationYear={obj['Plantation Year']}
                oxygenReleased={obj['Oxygen Released']} />} 
                />
            })
          }
        </Routes>
    </div>
  );
}

export default App;
