import { FC, ReactNode } from 'react';

type AdvantagesProps = {
  children: ReactNode;
};

const AdvantagesWrapper: FC<AdvantagesProps> = ({ children }) => {
  return (
    <div className="container">
      <div className="flex justify-between  gap-y-4 flex-wrap items-center">
        {children}
      </div>
    </div>
  );
};

export default AdvantagesWrapper;
