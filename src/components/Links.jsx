import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
const Links = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/fahad-bashir-9b8914373/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/fahad4046566",
      label: "GitHub",
    },

    {
      icon: <FaWhatsapp />,
      url: "https://wa.me/+923329585581",
      label: "WhatsApp",
    },
  ];
  return <div>
     <motion.div className="flex gap-4 justify-center lg:justify-start m-4"
     
     initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}>
            {socialLinks.map((social, i) => {
              return (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-outline btn-primary"
                  aria-label={social.label}
                   whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              );
            })}
          </motion.div>
  </div>;
};

export default Links;
