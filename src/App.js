import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import UserOnbord from './pages/userOnboard/UserOnbord';
import ProjectOnboard from './pages/projectOnboard/ProjectOnboard';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user-onboard" element={<UserOnbord />} />
        <Route path="/project-submission" element={<ProjectOnboard />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
