
import { motion } from "framer-motion";
import { RiBracesFill } from "react-icons/ri"; // Example icon

const Logo = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-1 cursor-pointer group md:pl-30"
    >
      {/* Icon with Glow Effect */}
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="text-blue-700 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
      >
        <RiBracesFill size={28} />
      </motion.div>

      {/* Text with Gradient and Shadow */}
      <div className="text-2xl font-black tracking-tight flex items-baseline">
        <span className="text-blue-700 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
          Fahad
        </span>
        <span className="text-gray-500 group-hover:text-blue-800 transition-colors duration-300 m-2">
          Bashir
        </span>
        
        {/* Animated Dot */}
        <motion.span 
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-2 w-2 bg-blue-700 rounded-full ml-1"
        ></motion.span>
      </div>
    </motion.div>
  );
};



export default Logo