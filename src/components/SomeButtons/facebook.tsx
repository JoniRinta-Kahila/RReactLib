import React from 'react';
import { LinkRel, LinkTarget } from '../Types';
import { FaFacebookF } from 'react-icons/fa';
import './someButtons.scss';

export interface FacebookProps {
  facebookLink: string;
  linkTarget?: LinkTarget;
  linkRel?: LinkRel;
  iconSize?: number;
  style?: React.CSSProperties;
  className?: string;
}

export const Facebook: React.FC<FacebookProps> = ({
  facebookLink,
  linkRel = 'noreferrer',
  linkTarget = '_balnk',
  iconSize = 24,
  style = undefined,
  className = '',
}) => {
  return (
    <li className={`somebuttons-facebook ${className}`} style={style}>
      <a href={facebookLink} target={linkTarget} rel={linkRel}>
        <FaFacebookF size={iconSize} />
      </a>
    </li>
  );
};

export default Facebook;
