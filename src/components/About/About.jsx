import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import profileImage from "../../assets/profile.png";

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <section
      id="about"
      className="py-4 px-[5vw] md:px-[7vw] lg:px-[20vw] font-sans mt-4 sm:mt-8 md:mt-10 lg:mt-18"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <motion.div
          className="md:w-1/2 text-center md:text-left mt-8 md:mt-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Jitin Nailwal
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-white leading-tight">
            I am a{" "}
            <span className="text-[#8245ec] font-bold">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "App Developer",
                  "Coder",
                  "Tech Enthusiast",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>

          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-10 mt-4 sm:mt-8 leading-relaxed">
            I am a passionate Full Stack Developer with a keen interest in
            building scalable web applications and exploring new technologies.
            With a strong foundation in both front-end and back-end development,
            I enjoy creating seamless user experiences and efficient server-side
            solutions. Let's connect and build something amazing together!
          </p>

          <a href="https://drive.google.com/file/d/1RY1jXhWJAkMn9iVORkTBWE0Tl-1k_XjW/view?usp=drive_link"
            target='_blank'
            rel='noopener noreferrer'
            className="inline-block text-white py-2.5 px-6 sm:py-3 sm:px-8 rounded-full mt-3 sm:mt-5 text-base sm:text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}>
            DOWNLOAD CV
          </a>
        </motion.div>
        {/* Right Side Of About Section */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >

        <Tilt
        className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem] border-4 border-purple-700 rounded-full"
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        scale={1.02}
        transitionSpeed={1000}
        gyroscope={false}
        tiltEnable={!isMobile}
        >

          <img src={profileImage} alt="Jitin Nailwal"
            className="w-full h-full rounded-full object-cover drop-shadow-[0_10px-20px_rgba(130,69,236,0.5)]" />

        </Tilt>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
