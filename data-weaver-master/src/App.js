import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './pages/products';
// import { Dashboard } from '@mui/icons-material';
import Dashboard from './pages/dashbord/dashboard';

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/filter">
          <Route index element={<Products />} />

          <Route path=":type"
            element={<Products />}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
    </>
   
  );
}

export default App;
