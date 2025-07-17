import React, { useState, useEffect } from 'react'
import { projects } from '../../constants'

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
      className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative bg-skills-gradient'
    >
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-white'>PROJECTS</h2>
        <div className='w-40 h-1 bg-purple-500 mx-auto mt-4'></div>
        <p className='text-gray-400 mt-4 text-lg font-semibold'>
          These are a few standout projects from the many I've built, showcasing a range of skills and technologies.
        </p>
      </div>

      <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className='border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-[0_15px_30px_5px_rgba(168,85,247,0.4)] hover:-translate-y-2 transition-transform duration-300'
          >
            <div className='p-4'>
              <img src={project.image} alt={project.title} className='w-full h-48 object-cover rounded-xl' />
            </div>
            <div className='p-6'>
              <h3 className='text-2xl font-bold text-white mb-2'>{project.title}</h3>
              <p className='text-gray-500 mb-4 pt-5 line-clamp-3'>{project.description}</p>
              <div className='mb-4'>
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className='inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4'>
          <div className='bg-gray-900 rounded-xl shadow-2xl w-full max-w-[700px] mx-auto overflow-hidden relative'>
            <div className='flex justify-end pt-2 pr-4'>
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
                  className='w-[95%] object-contain rounded-xl shadow-2xl'
                />
              </div>

              <div className='lg:p-8 p-6'>
                <h3 className='lg:text-3xl font-bold text-white mb-4 text-md'>
                  {selectedProject.title}
                </h3>

                <p className='lg:text-base text-xs text-gray-400 mb-6'>{selectedProject.description}</p>

                <div className='flex flex-wrap gap-2 mb-6'>
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
          </div>
        </div>
      )}
    </section>
  )
}

export default Work
