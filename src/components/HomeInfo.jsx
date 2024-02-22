import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} className='w-4 h-4 object-contain'/>
    </Link>
  </div>
)

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Hi, I am <span className='font-semibold'>Zoe Mawby Smart</span> 👋
      <br />
      A Software Engineer from Australia
    </h1>
  ),
  2: (
    <InfoBox
      text='Excited to learn more skills and find my next big project!'
      link= '/about'
      btnText= 'Learn More'
    />
  ),
  3: (
    <InfoBox
      text='Take a look at what I have been working on recently.'
      link= '/projects'
      btnText= 'Vist my portfolio'
    />
  ),
  4: (
    <InfoBox
      text='Looking for a Dev? I could be right for your team!'
      link= '/contact'
      btnText= "Let's talk"
    />
  )
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null; // who is passing the currentstage? // a nice reusable method
}

export default HomeInfo
