import { ReactNode, FC } from 'react';

interface ButtonProps {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <div className="font-bold text-[12px] leading-[14px] text-center border-2 border-solid border-white w-[293px] max-w-full h-[75px] flex items-center justify-center uppercase">
      {children}
    </div>
  );
};

export default Button;
