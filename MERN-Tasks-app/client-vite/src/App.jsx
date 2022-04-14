import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import ForgetPass from './pages/ForgetPass';
import Login from './pages/Login';
import NewPass from './pages/NewPass';
import SignUp from './pages/SignUp';
import ConfimrAccount from './pages/ConfimrAccount';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout/>}>
          <Route index element={<Login/>} />
          <Route path="signup" element={<SignUp/>}/>
          <Route path="forget-pass" element={<ForgetPass/>} />
          <Route path="forget-pass/:token" element={< NewPass/>} />
          <Route path="confirm-account/:id" element={<ConfimrAccount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
