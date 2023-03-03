import { Routes, Route } from 'react-router-dom'
import Home from './views/Home/Home'
import About from './views/About'
import Privacy from './views/Privacy'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/privacy' element={<Privacy />}></Route>
    </Routes>
  )
}

export default App
