import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"
import { socialLinks } from '../constants';


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


          <div className='flex items-center justify-center gap-1 rounded-lg w-20 h-10 bg-white shadow-md'>
          {socialLinks.map((social) => (
            <div className="">
              <Link to={social.link}
                target='_blank'
                rel='noopener noreferrer'
              >
              </Link>
              <img src={social.iconUrl} alt={social.name} className='w-4 h-4 object-contain' />
            </div>
          ))}
        </div>


    </header>
  )
}

export default Nbar
