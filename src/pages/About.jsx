import React from 'react'
import { skills } from '../constants/'

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Zoe</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>Software Engineer based in Berlin, Germany.
          I am a recent graduate from Le Wagon's Intensive Web Development Bootcamp
          and loving learning new skills with projects like this React website.
          Unleashing my creativity as a freelance full-stack designer and looking for
          opportunities to learn from experienced Devs in a hands-on environment</p>
      </div>

      <div className='py-10 flex flex-col gap-3 text-slate-500'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}

        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>

        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>Finding innovation and teaming up with smart people
            from a Chemistry Lab, a Coworking Cafe and now in Tech.
            I've worked in all sorts of places in the desert in Australia to the US and Germany.
            have a look at my
            <a className='blue-gradient_text'
            href="www.linkedin.com/in/zoe-mawby-smart">linkedIn</a> for the full story. </p>
        </div>
      </div>
    </section>
  )
}

export default About
