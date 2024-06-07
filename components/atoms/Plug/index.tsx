import clsx from 'clsx';
import React from 'react';
import { ReactNode, FC } from 'react';

const colors = {
  darkBlue: 'bg-[#1C2755]',
  green: 'bg-[#274916]',
};

type PlugProps = {
  component?: React.ElementType;
  className?: string;
  children: ReactNode;
  background: keyof typeof colors;
};

const Plug: FC<PlugProps> = ({ children, background, component = 'li' }) => {
  const className = clsx(
    colors[background],
    'p-[10px] max-lg:p-[8px]  max-md:p-[6px] max-ml:p-[4px]',
  );

  return React.createElement(component, { className }, children);
};

export default Plug;
