import { ReactNode, FC } from 'react';

const colors = {
  lilac: 'bg-[#8c9efb]',
  turquoise: 'bg-[#89e1f3]',
  swamp: 'bg-[#92c29c]',
  blue: 'bg-[#474ce1]',
};

type PlugProps = {
  children: ReactNode;
  background: keyof typeof colors;
};

const Plug: FC<PlugProps> = ({ children, background }) => {
  return <li>{children}</li>;
};

export default Plug;
