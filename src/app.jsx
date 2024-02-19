import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Nbar from './components/Nbar';
import {Home, About, Projects, Contact} from './pages';

const app = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Nbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </main>
  )
}

export default app
