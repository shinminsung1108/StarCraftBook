import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './component/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Protoss from './component/race/Protoss';
import Zerg from './component/race/Zerg';
import Terran from './component/race/Terran';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/StarCraftBook" element={<MainPage />} />
            <Route path="/StarCraftBook/protoss" element={<Protoss />} />
            <Route path="/StarCraftBook/terran" element={<Terran />} />
            <Route path="/StarCraftBook/zerg" element={<Zerg />} />

          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
