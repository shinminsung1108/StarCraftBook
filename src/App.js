import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './component/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Protoss from './component/race/Protoss';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/react-10CB" element={<MainPage />} />
            <Route path="/react-10CB/protoss" element={<Protoss />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
