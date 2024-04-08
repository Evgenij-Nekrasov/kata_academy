import clsx from 'clsx';
import React from 'react';
import { ReactNode, FC } from 'react';

const colors = {
  swamp: 'bg-[#92c29c]',
  transparent: 'bg-[transparent]',
};

type PlugProps = {
  component?: React.ElementType;

  children: ReactNode;
  background: keyof typeof colors;
};

const Button: FC<PlugProps> = ({
  children,
  background,
  component = 'button',
}) => {
  const className = clsx(
    colors[background],
    'w-[293px] max-lg:w-[280px] max-md:w-[270px]',
  );

  return React.createElement(component, { className }, children);
};

export default Button;
