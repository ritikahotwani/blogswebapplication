import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import { useState } from "react";
import {signOut} from 'firebase/auth';
import {auth} from './firebase-config';
import About from "./components/About";
function App() {
// to check logged in or not
  // const [isAuth, setIsAuth]=useState(false);  
  const [isAuth,setIsAuth]=useState(localStorage.getItem('isAuth'));
  const  signOutUser=()=>{
    signOut(auth).then(()=>  {
       localStorage.clear();
       setIsAuth(false);
       window.location.pathname ='/login';
    })
  }
  
  return (
    <div className="App">

       <BrowserRouter>
         <nav className="navbar navbar-expand-lg justify-content-center navbar-light bg-dark text-center py-4">
         <Link to='/'className="nav-link text-white  mx-2">Blogs</Link> 
         {/* home */}
         <Link to='/about' className="nav-link text-white">About us</Link>
        {!isAuth ? <Link to='/login' className="nav-link text-white  mx-2">Login</Link>  : 
          <>
          
        <Link to ='/createpost' className="nav-link text-white  mx-2">Publish</Link>    
        {/* create */}
        <button className="btn btn-primary" onClick={signOutUser}>Logout</button>
          </>
        }
       
         </nav>
         <div className="container  mt-5">
        <Routes>
          <Route path='/' element ={<Home isAuth = {isAuth}/>}></Route>
          <Route path='/createpost' element={<CreatePost isAuth = {isAuth}/>}/>
          <Route path='/login' element={<Login setIsAuth ={setIsAuth}/>}/>
        <Route path='/about' element={<About/>}/>
        </Routes>
         </div>
       </BrowserRouter>
    </div>
  );
}

export default App;
