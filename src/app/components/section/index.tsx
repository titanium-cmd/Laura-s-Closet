import { motion } from 'framer-motion';
import React, { HTMLAttributes } from 'react';
import { H4 } from '../text';

interface SectionProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
  title?: string;
  hasSpacing?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  className,
  hasSpacing = true,
  title,
}) => {
  const sectionVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.div
      variants={sectionVariants}
      animate="animate"
      className={`${hasSpacing ? 'md:px-20 px-10' : ''} ${className} mt-24 md:mt-0`}
    >
      {title && (
        <motion.div
          variants={sectionVariants}
          animate="animate"
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
