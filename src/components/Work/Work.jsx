import React, { useState, useEffect } from 'react'
import { projects } from '../../constants'
import { motion, AnimatePresence } from 'framer-motion'

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const handleOpenModal = (project) => {
    setSelectedProject(project)
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
  }

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [selectedProject])

  return (
    <section
      id='work'
      className='py-24 pb-24 px-[5vw] md:px-[7vw] lg:px-[20vw] font-sans relative bg-skills-gradient'
    >
      <motion.div
        className='text-center mb-16'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className='text-4xl font-bold text-white'>PROJECTS</h2>
        <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
        <p className='text-gray-400 mt-4 text-lg font-semibold'>
          These are a few standout projects from the many I've built, showcasing a range of skills and technologies.
        </p>
      </motion.div>

      <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className='border border-gray-700 bg-gray-900 backdrop-blur-md rounded-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] overflow-hidden cursor-pointer hover:shadow-[0_15px_30px_5px_rgba(168,85,247,0.4)] hover:-translate-y-2 transition-transform duration-300'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className='p-4'>
              <img src={project.image} alt={project.title} className='w-full h-48 object-contain bg-gray-800 rounded-xl' />
            </div>
            <div className='p-6'>
              <h3 className='text-2xl font-bold text-white mb-2'>{project.title}</h3>
              <p className='text-gray-500 mb-4 pt-5 line-clamp-3'>{project.description}</p>
              <div className='mb-4'>
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className='inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Container with AnimatePresence */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4'
            onClick={handleCloseModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className='bg-gray-900 rounded-xl shadow-2xl w-full max-w-[700px] max-h-[90vh] mx-auto overflow-y-auto relative'
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className='sticky top-0 z-10 flex justify-end pt-2 pr-4 bg-gray-900'>
                <button
                  onClick={handleCloseModal}
                  className='text-white text-3xl font-bold hover:text-purple-500'
                >
                  &times;
                </button>
              </div>

              <div className='flex flex-col'>
                <div className='w-full flex justify-center px-4'>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className='w-[95%] max-h-[40vh] object-contain rounded-xl shadow-2xl'
                  />
                </div>

                <div className='lg:p-8 p-4'>
                  <h3 className='lg:text-3xl font-bold text-white mb-3 text-lg'>
                    {selectedProject.title}
                  </h3>

                  <p className='lg:text-base text-sm text-gray-400 mb-4'>{selectedProject.description}</p>

                  <div className='flex flex-wrap gap-2 mb-4'>
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className='bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className='flex gap-4'>
                    <a
                      href={selectedProject.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1
                      rounded-xl lg:text-xl text-sm font-semibold text-center'
                    >
                      View Code
                    </a>

                    <a
                      href={selectedProject.webapp}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl
                      text-sm font-semibold text-center'
                    >
                      View Live
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Work
