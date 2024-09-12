import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import DashboardBox from './components/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DashboardBox/>}/>
      </Routes>
    </Router>
  );
}

export default App;
