import clsx from 'clsx';
import React from 'react';
import { ReactNode, FC } from 'react';

const images = {
  image1: '/assets/icons/communication.svg',
  image2: '/assets/icons/dollar.svg',
  image3: '/assets/icons/support.svg',
};

const alt = {
  name1: 'communication',
  name2: 'dollar',
  name3: 'support',
};

type ImageProps = {
  component?: React.ElementType;

  children?: ReactNode;
  image: keyof typeof images;
  name: keyof typeof alt;
};

const ContentAdvantage: FC<ImageProps> = ({
  children,
  image,
  name,
  component = 'div',
}) => {
  const className = clsx(images[image], alt[name]);

  return React.createElement(component, { className }, children);
};

export default ContentAdvantage;
