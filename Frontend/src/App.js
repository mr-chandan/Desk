import './App.css';
import { Login } from './pages/login/Login';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Frontpage } from './pages/frontpage/Frontpage';
import { Navbar } from './components/Navbar/Navbar'
import TakeAtt from './pages/TakeAtt/TakeAtt';

const isauth = true
const isAdmin = true

function App() {
  return (
    <BrowserRouter>
          <Navbar/>
      <Routes>
        <Route element={<Guest/>}>
          <Route path='/' element={<Login/>}/>
        </Route>
        <Route element={<Protected/>}>
          <Route path='/stdpage' element={<Frontpage/>}/>
        </Route>
        <Route element={<Techers/>}>
          <Route path='/takeatt' element={<TakeAtt/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Guest = ()=>{
  return ( isauth ? <Navigate to = "/stdpage"/>:<Outlet/>)
}
const Protected = ()=>{
  return ( !isauth ? <Navigate to = "/"/>: isauth && !isAdmin ? <Outlet/> : <Navigate to='/takeatt' />)
}
const Techers = ()=>{
  return (!isauth ? <Navigate to='/' /> : isauth && isAdmin ?  <Outlet /> :<Navigate to='/takeatt' />)
}
export default App;

