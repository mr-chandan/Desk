import './App.css';
import { Login } from './pages/login/Login';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Frontpage } from './pages/frontpage/Frontpage';
import { Navbar } from './components/Navbar/Navbar'
import TakeAtt from './pages/TakeAtt/TakeAtt';
import Course from './pages/Admin/Course'

const isauth = true
const role = "Admin"  



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Guest />}>
          <Route path='/' element={<Login />} />
        </Route>
        <Route element={<Student />}>
          <Route path='/stdpage' element={<Frontpage />} />
        </Route>
        <Route element={<Teachers/>}>
        <Route path='/takeatt' element={<TakeAtt/>}/> 
        </Route>
        <Route element={<Admin />}>
          <Route path='/admin' element={<Course />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Guest = () => {
  return (isauth ? <Navigate to="/stdpage" /> : <Outlet />)
}
const Student = () => {
  return (!isauth ? <Navigate to="/" /> : isauth && role == "Student" ? <Outlet /> : <Navigate to='/takeatt'/>)
}
const Teachers = () => {
  return (!isauth ? <Navigate to='/' /> : isauth && role == "Teacher" ? <Outlet /> : <Navigate to='/admin'/>)
}
const Admin = () => {
  return (!isauth ? <Navigate to='/' /> : isauth && role == "Admin" ? <Outlet /> : <Navigate to='/' />)
}
export default App;
