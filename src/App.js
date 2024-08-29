import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Main } from './components/Main';
import { Search } from './components/Search';

function App() {
  return  (
    <Router basename="/game-of-thrones">
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/characters" element={<Main />} />
        <Route path="/character/:id" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
