import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Candidate from './pages/Candidate';
import Manager from './pages/Manager';

function App() {
  return (
    <div className='min-h-screen min-w-full bg-zinc-950 text-white overflow-hidden'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/candidate" element={<Candidate />} />
        <Route path="/manager" element={<Manager />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
