import React from 'react';
import './someButtons.scss';

export interface SomeButtonsProps {}

export const SomeButtons: React.FC<SomeButtonsProps> = ({ children }) => {
  return <div className='somebuttons-container'>{children}</div>;
};
