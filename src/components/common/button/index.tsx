import React from 'react';

type Props = {
  type?: 'reset' | 'submit' | 'button';
  className?: string;
  title: string;
};

const ChiButton = ({ type = 'button', className = '', title }: Props) => (
  <button type={type} className={className}>
    {title}
  </button>
);

export default ChiButton;
