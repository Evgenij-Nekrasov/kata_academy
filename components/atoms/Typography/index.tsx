import React, { CSSProperties, ReactNode } from 'react';

import clsx from 'clsx';

const colors = {
  whited: 'text-white',
  blacked: 'text-black',
};

const presets = {
  common1: 'text-white hover:text-blue-400 custome-transition',
  header1:
    'font-semibold text-[60px] leading-[1.2] text-white mb-0 max-lg:text-[50px]  max-md:text-[30px] max-md:text-left',
};

type TypographyProps = {
  children: ReactNode;
  component?: React.ElementType;
  color: keyof typeof colors;
  preset: keyof typeof presets;
  style?: CSSProperties;
  align?: 'left' | 'center' | 'right';
  className?: string;
};

const Typography: React.FC<TypographyProps> = ({
  children,
  color = 'blacked',
  component = 'p',
  preset,
  style,
  align,
  className: classNameFromProps,
}) => {
  const className = clsx(
    colors[color],
    presets[preset],
    //   styles.root,
    //   styles[color],
    //   styles[align!],
    classNameFromProps,
  );

  return React.createElement(component, { style, className }, children);
};

export default Typography;
