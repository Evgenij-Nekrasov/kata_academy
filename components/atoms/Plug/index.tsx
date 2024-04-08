import clsx from 'clsx';
import React from 'react';
import { ReactNode, FC } from 'react';

const colors = {
  lilac: 'bg-[#8c9efb]',
  turquoise: 'bg-[#89e1f3]',
  swamp: 'bg-[#92c29c]',
  blue: 'bg-[#474ce1]',
};

type PlugProps = {
  component?: React.ElementType;

  children: ReactNode;
  background: keyof typeof colors;
};

const Plug: FC<PlugProps> = ({ children, background, component = 'div' }) => {
  const className = clsx(colors[background], 'p-[6px]');

  return React.createElement(component, { className }, children);
};

export default Plug;
