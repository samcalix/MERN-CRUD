import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Users'
import CreateUser from './Createuser'
import UpdateUser from './UpdateUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users/>}/>
          <Route path='/create' element={<CreateUser/>}/>
          <Route path='/update/:id' element={<UpdateUser/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
