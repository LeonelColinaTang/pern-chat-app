import {Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';

function App() {
 
  return (
    <div className="p-4 h-screen flex items-center justify-center">
     <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Home />} />
     </Routes>
    </div>
  )
}

export default App
