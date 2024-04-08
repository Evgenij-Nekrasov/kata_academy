import React, { CSSProperties, ReactNode } from 'react';

import { clsx } from 'clsx';

const colors = {
  grayed: 'text-[#29292f]',
};

const presets = {
  common1: 'text-white hover:text-blue-400 custome-transition',
  header1:
    'font-semibold text-[60px] leading-[1.2] text-white mb-0 max-lg:text-[50px]  max-md:text-[30px] max-md:text-left',
  plug: 'font-semibold leading-[1.2] text-[20px]',
};


type TypographyProps = {
  children: ReactNode;
  component?: React.ElementType;
  preset?: keyof typeof presets;
  color: keyof typeof colors;
  style?: CSSProperties;
  align?: 'left' | 'center' | 'right';
  className?: string;
};

const Typography: React.FC<TypographyProps> = ({
  children,
  color = 'grayed',
  component = 'span',
  preset = 'plug',
  style,
  align,
  className: classNameFromProps,
}) => {
  const className = clsx(
    presets[preset],
    colors[color],
    classNameFromProps,
  );

  return React.createElement(component, { style, className }, children);
};

export default Typography;
