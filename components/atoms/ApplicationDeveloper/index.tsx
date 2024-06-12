import { whatFrontendDo } from '@/app/java/constant';
import Typography from '../../globalTypography';
import Image from 'next/image';

const ApplicationDeveloper = () => {
  return (
    <div className="grid grid-cols-2 mb-24 max-md:grid-cols-1 grid-rows-2 gap-14 max-lg:gap-8">
      {whatFrontendDo.map((busy, index) => (
        <Typography
          key={index}
          className={`${
            busy.turn === 'left'
              ? 'flex flex-row-reverse text-right'
              : 'flex flex-row'
          } gap-x-6`}
          component="div"
        >
          <Image
            src="https://kata.academy/images/stack/1-1.svg"
            alt={'stack'}
            width={150}
            height={150}
            className="rounded-full bg-violet p-5 max-sm:p-3 max-lg:w-32 max-lg:h-32 max-sm:w-24 max-sm:h-24"
          />
          <div>
            <h3 className="font-bold text-2xl max-lg:text-xl max-sm:text-lg max-sm:leading-6 text-violet mb-[17px]">
              {busy.title}
            </h3>
            <p className="text-lg max-lg:text-base  text-white  ">
              {busy.description}
            </p>
          </div>
        </Typography>
      ))}
    </div>
  );
};

export default ApplicationDeveloper;
