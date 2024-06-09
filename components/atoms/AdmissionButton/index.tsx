import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface AdmissionButtonProps {
  title?: ReactNode;
  imageUnderTitle?: ReactNode;
  imageBig?: ReactNode;
  key?: number;
  background: string;
  link?: string;
}

const AdmissionButton: FC<AdmissionButtonProps> = ({
  imageBig,
  imageUnderTitle,
  title,
  key,
  background,
  link,
}) => {
  return link ? (
    <Link href={`${link}`}>
      <div
        className={`group cursor-pointer pt-[35px] px-[32px] pb-[45px] max-md:py-[20px] max-sm:py-[15px] ${background} flex justify-between items-center rounded-[30px]`}
      >
        <div className="flex flex-col gap-y-10 max-sm:gap-y-[15px]">
          {title}
          {imageUnderTitle}
          {key}
        </div>
        {imageBig}
      </div>
    </Link>
  ) : (
    <div
      className={`group ${
        link ? 'cursor-pointer' : ''
      } pt-[35px] px-[32px] pb-[45px] max-md:py-[20px] max-sm:py-[15px] ${background} flex justify-between items-center rounded-[30px]`}
    >
      <div className="flex flex-col gap-y-10 max-sm:gap-y-[15px]">
        {title}
        {imageUnderTitle}
        {key}
      </div>
      {imageBig}
    </div>
  );
};

export default AdmissionButton;
