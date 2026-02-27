import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'

const Contact = () => {

  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    if (isSending) return;
    if (!form.current.checkValidity()) return;
    setIsSending(true);

    emailjs
      .sendForm(
        "service_eiymtds",
        "template_y0lt56r",
        form.current,
        "SUXwhbTJdIN7wNoXw"
      )
      .then(
        () => {
          setIsSent(true);
          setIsSending(false);
          setHasSubmitted(false);
          form.current.reset();
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'dark',
          });

        },
        (error) => {
          setIsSending(false);
          toast.error("Failed to send Message. Please Try Again.", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'dark',
          });
        });
  }
  return (
    <section
      id="contact"
      className='flex flex-col items-center justify-center py-24 px-[5vw] md:px-[7vw] lg:px-[20vw]'
    >

      <ToastContainer />

      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Feel free to reach out for collaborations, questions, or opportunities. I'm always open to connecting and creating together.
        </p>
      </motion.div>

      {/*Contact Form */}

      <motion.div
        className='mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className='text-xl font-semibold text-white text-center'>
          Connect With Me
        </h3>

        <form ref={form} onSubmit={sendEmail} noValidate className={`mt-4 flex flex-col space-y-4 ${hasSubmitted ? 'submitted' : ''}`}>
          <input type='email' name='user_email' placeholder='Your Email' required
            className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'
          />
          <input type='text' name='user_name' placeholder='Your Name' required
            className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'
          />
          <input type='text' name='subject' placeholder='Subject' required
            className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'
          />

          <textarea name="message" placeholder='Message' rows="4" required
            className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'>
          </textarea>

          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 active:scale-95 transition-transform duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSending ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              'SEND'
            )}
          </button>
        </form>
      </motion.div>


    </section>
  )
}

export default Contact
