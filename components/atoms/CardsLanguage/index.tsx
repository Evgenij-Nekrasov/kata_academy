import clsx from 'clsx';
import React from 'react';
import { ReactNode, FC } from 'react';

const images = {
  java: '/assets/icons/java.svg',
  frontend: '/assets/icons/frontend.svg',
};

const headlines = {
  java: 'Java Developer',
  frontend: 'Frontend Developer',
};

const alt = {
  java: 'java',
  frontend: 'frontend',
};

type CardProps = {
  component: React.ElementType;
  children: ReactNode;

  image: keyof typeof images;
  title: keyof typeof headlines;
  name: keyof typeof alt;
};

const CardContent: FC<CardProps> = ({
  children,
  component = 'div',
  image,
  title,
  name,
}) => {
  const className = clsx(images[image], alt[name], headlines[title]);

  return React.createElement(component, { className }, children);
};

export default CardContent;
