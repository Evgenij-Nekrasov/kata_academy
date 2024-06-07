import Image from 'next/image';
import { ReactNode, FC } from 'react';
import Button from '../Button';
import Typography from './Typography';
import Link from 'next/link';

type PrizeProps = {
  title?: ReactNode;
  paragraph?: ReactNode;
  button?: ReactNode;
  image?: ReactNode;
  blockStyle?: ReactNode;
};

const Prize: FC<PrizeProps> = ({
  button,
  paragraph,
  title,
  image,
  blockStyle,
}) => {
  return (
    <div className={`mb-[120px] ${blockStyle}`}>
      <div className="container max-lg:p-0">
        <div className="flex max-md:flex-col pt-[70px] max-sm:pt-[30px] max-sm:px-[10px] px-[60px] pb-[80px] bg-[#434343] rounded-[30px] max-lg:rounded-none gap-x-11">
          <div className="max-md:order-last">
            <h2 className="h2 max-md:text-[27px] max-sm:text-[23px] max-sm:text-[20px] md:leading-10">
              {title}
            </h2>
            {paragraph}
            {button}
          </div>
          {image}
        </div>
      </div>
    </div>
  );
};

export default Prize;
