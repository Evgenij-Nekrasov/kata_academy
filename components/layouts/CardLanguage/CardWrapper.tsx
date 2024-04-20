import { FC, ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

const CardWrapper: FC<CardProps> = ({ children }) => {
  return (
    <div className="mb-[100px]">
      <div className="container max-sm:px-[10px]">
        <div className="grid grid-cols-2 max-g:grid-cols-1 gap-[30px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CardWrapper;
