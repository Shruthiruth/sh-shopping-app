
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './features/auth/Login'
import { AuthProvider } from './app/authProvider'


function App() {
  
  return (
    
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
  


}

export default App
