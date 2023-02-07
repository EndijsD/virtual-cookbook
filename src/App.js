import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes></Routes>
    </Router>
  );
}

export default App;
