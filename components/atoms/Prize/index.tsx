import Image from 'next/image';
import { ReactNode, FC } from 'react';
import Button from '../Button';
import Typography from '../Typography';

type PrizeProps = {
  children?: ReactNode;
};

const Prize: FC<PrizeProps> = ({ children }) => {
  return (
    <div className="mb-[120px] container max-lg:p-0">
      <div className="flex max-md:flex-col pt-[70px] max-sm:pt-[30px] max-sm:px-[10px] px-[60px] pb-[80px] bg-[#434343] rounded-[30px] max-lg:rounded-none gap-x-11">
        <div className="w-[calc(100% - 250px)] grow max-md:order-last">
          <h2 className="h2 max-md:text-[27px] max-sm:text-[23px] max-sm:text-[20px]">
            <span> Каждый выпускник</span> получает от 3 до 5 офферов и
            <span>устраивается на работу</span>
          </h2>
          <p className="my-[40px] text-white leading-[140%] text-[18px] max-sm:text-[15px]">
            в течение двух месяцев после окончания обучения в школе
            программирования Kata Academy.
          </p>
          <Button
            background="transparent"
            className=" max-md:w-full max-sm:w-full"
          >
            <Typography
              color="whited"
              preset="buttonBig"
              className="hover:text-black"
            >
              Истории выпускников
            </Typography>
          </Button>
        </div>
        <div className="mt-0 mx-auto mb-[45px]">
          <Image
            src="/assets/icons/award.svg"
            alt="award"
            width={250}
            height={250}
            className="max-md:w-[190px] max-md:h-[190px] max-sm:w-[160px] max-sm:h-[160px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Prize;
