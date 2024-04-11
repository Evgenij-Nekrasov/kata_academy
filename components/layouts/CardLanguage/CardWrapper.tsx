import { FC, ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

const CardWrapper: FC<CardProps> = ({ children }) => {
  return (
    <div className="container mb-[160px]">
      <div className="grid grid-cols-2 gap-[30px]">{children}</div>
    </div>
  );
};

export default CardWrapper;
