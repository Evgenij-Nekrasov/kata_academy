import clsx from 'clsx';
import React from 'react';
import { ReactNode, FC } from 'react';

const borderStyle = {
  violet: 'border-violet border-2',
};

type CircleProps = {
  component?: React.ElementType;
  children: ReactNode;
  border: keyof typeof borderStyle;
  className?: string;
};

const Circle: FC<CircleProps> = ({
  children,
  border,
  component = 'div',
  className: classNameFromProps,
}) => {
  const className = clsx(
    classNameFromProps,
    borderStyle[border],
    'w-[200px] h-[200px] rounded-full flex justify-center items-center opacity-50 hover:opacity-100 custome-transition max-lg:w-[170px] max-lg:h-[170px] max-g:w-[140px] max-g:h-[140px]',
  );

  return React.createElement(component, { className }, children);
};

export default Circle;
