import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from '../components/About'
import Anggota from '../components/Anggota'
import Error from '../components/layouts/Error'
import Menu from '../components/Menu'
import Menus from '../components/Menus'
import Welcome from '../components/Welcome'


const App = () => {

  return (
    <div className='bg-white text-slate-800 h-[100vh] sm:w-[400px] mx-auto w-full p-5 overflow-x-hidden shadow'>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/menu" element={<Menus />} />
          <Route path="/about" element={<About />} />
          <Route path="/anggota" element={<Anggota />} />
          <Route path="/:id" element={<Menu />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App