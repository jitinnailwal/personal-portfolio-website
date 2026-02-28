// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import { motion } from "framer-motion";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[5vw] md:px-[7vw] lg:px-[20vw] font-sans text-white clip-path-custom"
    style={{
      backgroundImage:
        "linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)",
    }}
  >
    {/* Section Title */}
    <motion.div
      className="text-center mb-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg font-semibold">
        These are several skills in which I have attained proficiency through self-learning and the successful execution of various projects.
      </p>
    </motion.div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-5 py-10 justify-between">
      {SkillsInfo.map((category, index) => (
        <motion.div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-4 sm:px-6 py-5 sm:py-6 mb-6 sm:mb-10 w-full md:w-[48%] rounded-2xl border border-gray-700 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-400 mb-4 text-center">
            {category.title}
          </h3>

          {/* Skill Items */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 w-full">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center justify-center gap-1.5 sm:gap-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:px-3 text-center min-w-0"
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 shrink-0"
                />
                <span className="text-[11px] sm:text-xs md:text-sm text-gray-300 truncate">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
