import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Lyout from './Lyout';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import IndexPages from './pages/IndexPages';

function App() {
  return (<main>


    <BrowserRouter>

      <Lyout />

      <Routes>
        

          {/* <Route index element={<Lyout />} /> */}
          <Route path="/" element={<IndexPages />} /> 
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

      </Routes>

    </BrowserRouter>



  </main>);
}

export default App;
