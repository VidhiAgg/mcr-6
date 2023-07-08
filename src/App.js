import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ResturantDetail from './pages/ResturantDetail/ResturantDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resturant/:id" element={<ResturantDetail />} />
      </Routes>
    </div>
  );
}

export default App;
