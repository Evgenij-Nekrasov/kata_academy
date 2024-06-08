import Typography from '@/components/globalTypography';
import Image from 'next/image';
import { FC } from 'react';

type AdvantagesProps = {
  image: string;
  alt: string;
  paragraph: string;
  key: number;
  title?: string;
};

const Graduates: FC<AdvantagesProps> = ({
  image,
  alt,
  paragraph,
  key,
  title,
}) => {
  return (
    <div key={key} className="flex flex-col justify-center mt-14">
      <div className="flex gap-x-5 mb-5">
        <Image
          width={445}
          height={265}
          src={`/assets/image/${image}.jpeg`}
          alt={alt}
          className="h-[200px] w-[200px] object-cover rounded-full max-sm:w-[80px] max-md:w-[95px] max-md:h-[95px] max-lg:w-[90px] max-lg:h-[90px]"
        />
        {title ? (
          <h2 className="flex text-2xl font-bold items-end">{title}</h2>
        ) : (
          <></>
        )}
      </div>
      <h2 className="paragraph font-normal max-w-[400px] text-left leading-8">
        {paragraph}
      </h2>
    </div>
  );
};

export default Graduates;
