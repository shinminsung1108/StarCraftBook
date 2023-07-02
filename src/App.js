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
            <Route path="/react-10CB" element={<MainPage />} />
            <Route path="/react-10CB/protoss" element={<Protoss />} />
            <Route path="/react-10CB/terran" element={<Terran />} />
            <Route path="/react-10CB/zerg" element={<Zerg />} />

          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
