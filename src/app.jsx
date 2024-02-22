import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Nbar from './components/Nbar';
import { About, Projects, Contact, Welcome} from './pages';
import Social from './components/Social';

const app = () => {
  return (
    <main className='bg-slate-300/20 h-full'>
      <Router>
        <Nbar/>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </main>
  )
}

export default app
