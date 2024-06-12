import clsx from 'clsx';
import React from 'react';
import { ReactNode, FC } from 'react';

const colors = {
  swamp: 'bg-[#92c29c]',
  transparent: 'backdrop-opacity-0',
  orange: 'bg-darkOrange',
};

type PlugProps = {
  component?: React.ElementType;

  children: ReactNode;
  background: keyof typeof colors;
  className?: string;
};

const Button: FC<PlugProps> = ({
  children,
  background,
  component = 'button',
  className: classNameFromProps,
}) => {
  const className = clsx(
    classNameFromProps,
    colors[background],
    'w-[293px] max-lg:w-[280px] max-md:w-[270px] hover:bg-[#642ab5] custome-transition',
  );

  return React.createElement(component, { className }, children);
};

export default Button;
