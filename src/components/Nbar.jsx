import { NavLink } from "react-router-dom"

const Nbar = () => {
  return (
    <header className="header">
      <NavLink to='/' className='w-14 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
        <p className='blue-gradient_text'>ZMS</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to='/about' className={({isActive}) => isActive ? 'text-blue-500': 'text-black'}>About</NavLink>
      </nav>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to='/projects' className={({isActive}) => isActive ? 'text-blue-500': 'text-black'}>Projects</NavLink>
      </nav>
    </header>
  )
}

export default Nbar
