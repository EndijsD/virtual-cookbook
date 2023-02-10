import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Create from './components/Create/Create';
import Homepage from './pages/Homepage';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<Create />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route
          path="*"
          element={
            <NotFound desc="That page cannot be found" displayButton={true} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
