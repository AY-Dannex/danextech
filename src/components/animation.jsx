import { motion } from "framer-motion"

function Show({
  children,
  type = "fade",   // default animation type
  delay = 0,
  duration = 0.6,
  once = false,
}) {
  // Define animation variants
  const variants = {
    fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    slideUp: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
    slideDown: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
    slideLeft: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
    slideRight: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
    zoomIn: { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } },
    zoomOut: { hidden: { opacity: 0, scale: 1.2 }, visible: { opacity: 1, scale: 1 } },
  };

  const chosen = variants[type] || variants.fade; // fallback to fade

  return (
    <motion.div
      variants={chosen}
      initial="hidden"
      whileInView="visible"
      transition={{ duration, delay }}
      viewport={{ once, amount: 0.2 }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}
export default Show