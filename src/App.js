import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Main } from './components/Main';
import { Search } from './components/Search';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/main" element={<Main />} />
        <Route path="/search/:id" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
