import React, { CSSProperties, ReactNode } from 'react';
import { clsx } from 'clsx';

const colors = {
  lightBlue: 'text-[#516fe4]',
  whited: 'text-white',
  blacked: 'text-black',
  lightGreen: 'text-[#52C41A]',
};

const presets = {
  header1:
    'font-semibold text-white text-[38px] leading-[110%] tracking-[-.02em]',
  header2:
    'text-white font-semibold text-[32px] leading-[110%] tracking-[-.01em]',
  plug: 'font-semibold leading-[1.2] text-[20px]',
  buttonBig:
    'font-bold text-[12px] leading-[1.4] text-center border-2 border-solid  text-wight max-w-full h-[75px] flex items-center justify-center uppercase max-lg:h-[68px] ',
  advantagesText:
    'leading-[140%] text-center text-xl tracking-wide text-white max-w-[290px] mt-0 mb-auto',
  community:
    'flex items-center w-full mb-[128px] gap-[48px]  max-md:gap-[25px] max-md:flex-col max-md:mb-[60px]',
};

type TypographyProps = {
  children: ReactNode;
  component?: React.ElementType;
  preset?: keyof typeof presets;
  color?: keyof typeof colors;
  style?: CSSProperties;
  align?: 'left' | 'center' | 'right';
  className?: string;
};

const Typography: React.FC<TypographyProps> = ({
  children,
  color = 'lightBlue',
  component = 'span',
  preset = 'plug',
  style,
  align,
  className: classNameFromProps,
}) => {
  const className = clsx(presets[preset], colors[color], classNameFromProps);

  return React.createElement(component, { style, className }, children);
};

export default Typography;
