import React, { ReactElement, ReactNode } from 'react';
import { FC } from 'react';

type AdvantagesProps = {
  children: ReactNode;
};
const WrapperAdvantages: FC<AdvantagesProps> = ({ children }) => {
  return (
    <div className="container">
      <div className="flex justify-evenly max-md:flex-col gap-x-6 items-start max-md:gap-y-11 mb-[145px] max-md:mb-[100px]">
        {children}
      </div>
    </div>
  );
};

export default WrapperAdvantages;
