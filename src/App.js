import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import DefaultLayout from './layout/default_layout';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DefaultLayout/>}/>
      </Routes>
    </Router>
  );
}

export default App;
