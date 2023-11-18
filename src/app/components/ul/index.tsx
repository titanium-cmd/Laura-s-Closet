import React, { HTMLAttributes } from 'react';
import Li, { LiProps } from '../li';
import { FontWeight } from '../text';

interface UlProps extends HTMLAttributes<HTMLHeadingElement> {
  links: LiProps[];
  fontWeight?: FontWeight;
  fontSize?: 'text-sm' | 'text-md' | 'text-lg' | 'text-base';
  ulClassName?: string;
  liClassName?: string;
  middleMan?: any;
}

const Ul: React.FC<UlProps> = ({ links, ulClassName, liClassName, fontWeight, fontSize, middleMan }) => {
  return (
    <ul className={`flex space-x-10 text-custom-gray-500 ${fontWeight} ${fontSize} ${ulClassName}`}>
      {links.length > 0 && links.map((link, i) => {
        return (
          <React.Fragment key={link.value}>
            {middleMan && (i !== 0 && i !== links.length) && middleMan}
            <Li className={liClassName} value={link.value} href={link.href} />
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Ul;
