import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import UserInfoSection from './components/UserInfo/UserInfoSection';
import BottomNavigationBar from './components/BottomNavigation/BottomNavigation';
import Dashboard from './components/Dashboard/Dashboard';
import UserProfile from './components/UserInfo/UserProfile';

function App() {


  return (
    <Router>

      <Routes>
        <Route path="/" element={<Header />} />
        {/*<Route path="/search" element={<Search />} /> */}
        <Route path="/exerciseBoard" element={<Dashboard />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
      <BottomNavigationBar />
    </Router>
  );
}

export default App;
