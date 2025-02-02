import { Route, Router, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Dashboard from './Pages/Dashboard'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Project from './Pages/Project'
import './App.css'

const App = () => {
  return(
    <>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/project/:id' element={<Project />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  )
}

export default App
