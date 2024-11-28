import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { NavigationBar } from './components/NavigationBar';
import Home from './views/Home';
import Money from './views/Money';
import Service from './views/Service';
function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/money' element={<Money/>} />
        <Route path='/service' element={<Service/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
