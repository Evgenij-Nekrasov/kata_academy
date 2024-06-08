import { ReactNode, FC } from 'react';

type PrizeProps = {
  title?: ReactNode;
  paragraph?: ReactNode;
  button?: ReactNode;
  image?: ReactNode;
  wrapperStyle?: ReactNode;
  background: string;
};

const Prize: FC<PrizeProps> = ({
  button,
  paragraph,
  title,
  image,
  wrapperStyle,
  background,
}) => {
  return (
    <div className={`mb-[100px]  ${wrapperStyle}`}>
      <div className="container max-lg:p-0">
        <div
          className={`flex items-center max-md:flex-col py-[50px] max-md:py-[40px] max-sm:pt-[30px] max-sm:px-[10px] px-[60px]  ${background} rounded-[30px] max-lg:rounded-none gap-x-11`}
        >
          <div className="max-md:order-last">
            {title}
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
