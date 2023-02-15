
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='Add' element={<Add/>}/>
            <Route path='Edit' element={<Edit/>}/>
          </Routes>
        </Router>
        
      </header>
    </div>
  );
}

export default App;
