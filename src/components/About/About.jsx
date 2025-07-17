import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from 'react-parallax-tilt';
import profileImage from "../../assets/profile.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-8 md:mt-10 lg:mt-18"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
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

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a passionate Full Stack Developer with a keen interest in
            building scalable web applications and exploring new technologies.
            With a strong foundation in both front-end and back-end development,
            I enjoy creating seamless user experiences and efficient server-side
            solutions. Let's connect and build something amazing together!
          </p>

          <a href=""
            target='_blank'
            rel='noopener noreferrer'
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}>
            DOWNLOAD CV
          </a>
        </div>
        {/* Right Side Of About Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end">

        <Tilt
        className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        perspective = {1000}
        scale={1.05}
        transitionSpeed={1000}
        gyroscope ={true}

        >

          <img src={profileImage} alt="Jitin Nailwal"
            className="w-full h-full rounded-full object-cover drop-shadow-[0_10px-20px_rgba(130,69,236,0.5)]" />

        </Tilt>
        </div>

      </div>
    </section>
  );
};

export default About;
