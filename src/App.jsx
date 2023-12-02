import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./Pages/Home.jsx";
import About from "./pages/About.jsx";
import Profile from "./pages/Profile.jsx";
import  Signin from "./pages/Signin.jsx";
import Signup from "./pages/Signup.jsx";

export default function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Profile" element={<Profile/>}/>
    <Route path="/Signin" element ={<Signin/>}/>
    <Route path="/Signup" element={<Signup/>}/>  
   </Routes>
   </BrowserRouter>
  )
}
