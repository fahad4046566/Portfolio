import { motion } from "framer-motion";
import { skills } from "../data/Skills";
import SkillCard from "../components/SkillCard";
import { useEffect } from "react";
const Skills = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <div className="flex justify-center mt-20">
        <h1 className="text-5xl font-extrabold mb-2 bg-linear-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
          Skills
        </h1>
      </div>
      {skills.map((s) => (
        <motion.div
          
          key={s.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="h-full md:m-20"
        >
          <SkillCard category={s.category} skills={s.skills} />
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
