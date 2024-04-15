import Image from 'next/image';

const AdmissionButton = () => {
  return (
    <div className="group cursor-pointer pt-[35px] px-[32px] pb-[45px] max-md:py-[20px] max-sm:py-[15px] bg-blue-400 flex justify-between items-center rounded-[30px]">
      <div className="flex flex-col gap-y-10 max-sm:gap-y-[15px]">
        <h2 className="h2 max-md:text-[26px] max-sm:text-[20px] max-l:text-[15px]">
          Поступить в KATA
        </h2>
        <div>
          <Image
            src="/assets/icons/arrow-right.svg"
            alt="arrow-right"
            width={47}
            height={13}
            className="group-hover:ml-[8px] custome-transition"
          />
        </div>
      </div>

      <Image
        src="/assets/icons/kata.svg"
        alt="kata"
        width={318}
        height={113}
        className="max-md:w-[280px] max-md:h-[90px] max-md:h-[70px] max-m:h-[50px] max-m:w-[170px]"
      />
    </div>
  );
};

export default AdmissionButton;
