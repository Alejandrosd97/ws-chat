import { Route, Routes } from 'react-router-dom'
import Principal from './pages/Principal'
import Sala from './pages/Sala'

function App() {
  

  return (
    <>

    <Routes>
      <Route path='/' element={<Principal/>} />
      <Route path='/room/:sala' element={<Sala/>} />
    </Routes>
   
    </>
  )
}

export default App
