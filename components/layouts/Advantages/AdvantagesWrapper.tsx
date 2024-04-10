import { FC, ReactNode } from 'react';

type AdvantagesProps = {
  children: ReactNode;
};

const AdvantagesWrapper: FC<AdvantagesProps> = ({ children }) => {
  return (
    <div className="container">
      <div className="flex justify-between max-md:flex-col  gap-y-4 flex-wrap items-center max-md:gap-7">
        {children}
      </div>
    </div>
  );
};

export default AdvantagesWrapper;
