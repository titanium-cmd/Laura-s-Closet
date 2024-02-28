import { motion } from 'framer-motion';
import React, { HTMLAttributes } from 'react';
import { H4 } from '../text';

// Define the props for the Section component
interface SectionProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
  title?: string;
  hasSpacing?: boolean;
}

// Section component
const Section: React.FC<SectionProps> = ({
  children,
  className,
  hasSpacing = true,
  title,
}) => {
  // Animation variants for the section
  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  // Transition for the animation
  const sectionTransition = {
    duration: 1,
    ease: [0.4, 0, 0.2, 1],
  };

  // Render the component
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden" // Set initial animation state
      animate="visible" // Set animation state to play
      transition={sectionTransition} // Apply transition settings
      className={`${hasSpacing ? 'md:px-20 px-10' : ''} ${className} mt-24 md:mt-0`}
    >
      {title && (
        <motion.div
          variants={sectionVariants}
          whileInView={'visible'}
          initial="hidden"
          viewport={{ once: false, amount: 0.5 }}
          transition={sectionTransition}
          className="md:mt-32 mb-7 flex flex-col justify-center items-center"
        >
          <H4 label={title} className="uppercase text-custom-gray-700" />
          <span className="h-[4px] w-[88px] mt-2 block bg-custom-gray-700" />
        </motion.div>
      )}
      {children}
    </motion.div>
  );
};

export default Section;
