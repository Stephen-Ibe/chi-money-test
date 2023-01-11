import React from 'react';

type Props = {
  type?: 'reset' | 'submit' | 'button';
  className?: string;
  title: string;
  onClick?: () => void;
};

const ChiButton = ({
  type = 'button',
  className = '',
  title,
  onClick,
}: Props) => (
  <button type={type} className={className} onClick={onClick}>
    {title}
  </button>
);

export default ChiButton;
