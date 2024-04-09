import { FC, ReactNode } from 'react';

type AdvantagesProps = {
  children: ReactNode;
};

const AdvantagesWrapper: FC<AdvantagesProps> = ({ children }) => {
  return (
    <div className="container">
      <div className="flex justify-between flex-wrap items-center mr-[-160px]">
        {children}
      </div>
    </div>
  );
};

export default AdvantagesWrapper;
