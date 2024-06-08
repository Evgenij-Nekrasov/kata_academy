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

const Advantages: FC<AdvantagesProps> = ({
  image,
  alt,
  paragraph,
  key,
  title,
}) => {
  return (
    <div key={key} className="grid grid-cols-1">
      <div className="sizeIcon">
        <Image
          width={102}
          height={120}
          src={`/assets/icons/${image}.svg`}
          alt={alt}
          className="w-[110px] h-[110px] max-sm:w-[80px] max-md:w-[95px] max-md:h-[95px] max-lg:w-[90px] max-lg:h-[90px]"
        />
      </div>
      {title ? (
        <Typography className="text-violet" preset="titleAdvantages">
          {title}
        </Typography>
      ) : (
        <></>
      )}
      <Typography preset="advantagesText">{paragraph}</Typography>
    </div>
  );
};

export default Advantages;
