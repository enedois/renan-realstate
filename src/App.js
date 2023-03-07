import './App.css';
import Create from './components/Create';
import Read from './components/read';
import Update from './components/update';
import { ReactDOM } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (   
    
    <div className="main">
      <h2 className="main-header">React Crud Operations</h2>
      <ul>
        <li><a href="/create">Create</a></li>
        <li><a href="/read">Read</a></li>
        <li><a href="/update">Update</a></li>
        </ul>
      <div>
        
        <Router>
        <Routes>
          <Route path="/create" element={<Create/>}/>
          <Route exact path='/read' element={<Read/>} />
          <Route path='/update' element={<Update/>} />
        </Routes> 
        </Router>

        {/* <Create/> */}
            
       
      </div>
    </div>
 

  );
}

export default App;
