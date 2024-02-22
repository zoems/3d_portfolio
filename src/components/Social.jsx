import React from 'react'
import { socialLinks } from '../constants';
import { Link } from 'react-router-dom';

const Social = () => {
  return (
    <header className="footer">
      {socialLinks.map((social) => (
        <div className='flex items-center gap-1'>
                <Link to={social.link}
                target='_blank'
                rel='noopener noreferrer'
                >
                </Link>
                <img src={social.iconUrl} alt={social.name} className='w-1/2 h-1/2 object-contain' />
              </div>
      ))}
    </header>

  )

}

    // <section className='cta'>
    //   <p className='cta-text'>Have a project in mind?
    //   <br className='sm:block hidden'/> Let's build something together!</p>
    //   <Link to='/contact' className='btn'>
    //     Contact
    //   </Link>
    // </section>


export default Social
