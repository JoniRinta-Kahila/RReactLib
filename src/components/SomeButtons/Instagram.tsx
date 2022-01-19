import React from 'react';
import { LinkRel, LinkTarget } from '../Types';
import { FaInstagram } from 'react-icons/fa';
import './someButtons.scss';

export interface InstagramProps {
  instagramLink: string;
  linkTarget?: LinkTarget;
  linkRel?: LinkRel;
  iconSize?: number;
  style?: React.CSSProperties;
  className?: string;
}

export const Instagram: React.FC<InstagramProps> = ({
  instagramLink,
  linkRel = 'noreferrer',
  linkTarget = '_balnk',
  iconSize = 24,
  style = undefined,
  className = '',
}) => {
  return (
    <li className={`somebuttons-instagram ${className}`} style={style}>
      <a href={instagramLink} target={linkTarget} rel={linkRel}>
        <i>
          <FaInstagram size={iconSize} />
        </i>
      </a>
    </li>
  );
};

export default Instagram;
