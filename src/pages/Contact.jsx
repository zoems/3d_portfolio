
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({name: '', email: '', message:''})
  const [isLoading, setisLoading] = useState(false)

  // e calls set form 'spreads other properties' then the [target] value is updated with e.target.value this is how i get my form values from the DOM
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };


  const handleFocus = () => {}; //in
  const handleBlur = () => {}; //out
  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "JavaScript Mastery",
        from_email: form.email,
        to_email: "sujata@jsmastery.pro",
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setisLoading(false);
      // TODO success message
      // hide an alert
      setForm({name: '', email: '', message:''})

    }).catch((error) => {
      setisLoading(false)
      console.log(error)
      // error message
    })
  };


  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
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
    </section>
  )
}

export default Contact
