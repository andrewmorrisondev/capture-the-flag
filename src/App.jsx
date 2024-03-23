import { Routes, Route } from 'react-router-dom'
import './App.css'

// Pages
import Landing from '/src/pages/Landing/Landing.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route 
          path="/" 
          element={<Landing />} 
        />
      </Routes>
    </>
  )
}

export default App
