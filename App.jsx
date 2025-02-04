import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Dashboard from './Pages/Dashboard'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Project from './Pages/Project'
import { AuthProvider } from './Context/AuthContext'
import './App.css'

const App = () => {
  return(
    <>
    <BrowserRouter>
      <AuthProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/project/:id' element={<Project />} />
          </Routes>
      </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
