
import './App.css';
import './components/Login.js'
import './components/Signup'
import Login from './components/Login.js';
import Signup from './components/Signup';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
   <div>
   <Router>
   <Routes>
  <Route path="/" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
</Routes>
   
    
  </Router>
   </div>
 
  );
}

export default App;
