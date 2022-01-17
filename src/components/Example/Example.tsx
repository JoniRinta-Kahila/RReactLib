import React from 'react';
import './example.scss';

export interface ExampleProps {}

export const Example: React.FC<ExampleProps> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
