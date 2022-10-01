import './Style/App.css';
import { MainNavBar } from './Components/MainNavBar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import { Login } from './Components/Login';

function App() {
  return (
    <div className="App">
      <header>
        <MainNavBar></MainNavBar>
      </header>
      <Home/>
      <Routes>
        <Route path='/item1' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
