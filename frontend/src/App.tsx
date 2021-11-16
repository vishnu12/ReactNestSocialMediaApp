import './App.css';
import {Route,Routes} from 'react-router-dom'
import { LoginPage } from './pages/login/LoginPage';
import { RegisterPage } from './pages/register/RegisterPage';
import { Home } from './pages/home/Home';
import { Profile } from './pages/profile/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/register' element={<RegisterPage />}/>
      <Route path='/profile' element={<Profile />}/>
    </Routes>
  );
}

export default App;
