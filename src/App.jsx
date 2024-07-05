// css
import './App.css'
// outlet
import { Outlet } from 'react-router-dom'

// components
import NavBar from './components/NavBar'

function App() {


  return (
    <div className='app'>
      
      <NavBar/>

      <div className='container'>
        <Outlet/>
      </div>

    </div>
  )
}

export default App
