import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Create from './components/Create/Create';
import Homepage from './pages/Homepage';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage page="home" />} />
        <Route path="/recipes/:id" element={<Homepage page="details" />} />
        <Route path="/create" element={<Create />} />
        <Route path="*" element={<NotFound item="page" />} />
      </Routes>
    </Router>
  );
}

export default App;
