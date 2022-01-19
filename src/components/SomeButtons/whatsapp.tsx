import React from 'react';
import { LinkRel, LinkTarget } from '../Types';
import { FaWhatsapp } from 'react-icons/fa';
import './someButtons.scss';

export interface WhatsappProps {
  whatsappLink: string;
  linkTarget?: LinkTarget;
  linkRel?: LinkRel;
  iconSize?: number;
  style?: React.CSSProperties;
  className?: string;
}

export const Whatsapp: React.FC<WhatsappProps> = ({
  whatsappLink,
  linkRel = 'noreferrer',
  linkTarget = '_balnk',
  iconSize = 24,
  style = undefined,
  className,
}) => {
  return (
    <li className={`somebuttons-whatsapp ${className}`} style={style}>
      <a href={whatsappLink} target={linkTarget} rel={linkRel}>
        <i>
          <FaWhatsapp size={iconSize} />
        </i>
      </a>
    </li>
  );
};

export default Whatsapp;
