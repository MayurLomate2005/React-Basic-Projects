
import { Route, Routes ,Navigate} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navigationbar from './component/Navigationbar'

function App() {
 

  return (
   <>
   <Navigationbar/>

   <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path='/about' element = {<About/>} />
    <Route path='/contact' element = {<Contact/>} />
    <Route path='/home' element = {<Home/>} />
    <Route path="*" element={<h2>404 - Page Not Found</h2>} />

    


   </Routes>



   </>
  )
}


export default App
