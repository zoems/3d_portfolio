
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useRef, useState } from 'react'

import Fox from '../models/Fox'
import Loader from '../components/Loader'
import useAlert from '../hooks/useAlert'
import Alert from '../components/Alert'

const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({name: '', email: '', message:''})
  const [isLoading, setisLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle')

  const { alert, showAlert, hideAlert } = useAlert();

  // e calls set form 'spreads other properties' then the [target] value is updated with e.target.value this is how i get my form values from the DOM
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoading(true);
    setCurrentAnimation('hit')

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Zoe Mawby Smart",
        from_email: form.email,
        to_email: "zoemsmart@gmail.com",
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setisLoading(false);
      showAlert({ show: true, text: 'Message sent successfully!', type: 'success' })


      setTimeout(() => {
        hideAlert();
        setCurrentAnimation('idle');
        setForm({name: '', email: '', message:''});
      }, [3000])

    }).catch((error) => {
      setisLoading(false)
      setCurrentAnimation('idle')
      console.log(error)
      showAlert({ show: true, text: 'I didnt recieve your message', type: 'danger' })
    })
  };

  const handleFocus = () => setCurrentAnimation('walk'); //in
  const handleBlur = () => setCurrentAnimation('idle'); //out


  return (
    <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>
      {alert.show && <Alert {...alert} />}
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get In Touch</h1>
        <form
          className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='Alex'
              required
              value={form.name}
              onChange={handleChange}
              onFocus = {handleFocus}
              onBlur = {handleBlur}
              />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='alex@email.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus = {handleFocus}
              onBlur = {handleBlur}
              />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows={4}
              className='textarea'
              placeholder='Let me know how I can help you!'
              required
              value={form.message}
              onChange={handleChange}
              onFocus = {handleFocus}
              onBlur = {handleBlur}
              />
          </label>
          <button
            type="submit"
            className='btn'
            disabled={isLoading}
            onFocus={handleBlur}
            onBlur={handleBlur}
          >
            {isLoading? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75, //feel of view
            near: 0.1,
            far: 1000
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <Suspense fallback={<Loader/>}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.6, 0.6, 0.6]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact
