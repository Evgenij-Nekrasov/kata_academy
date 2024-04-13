import { Community } from '@/constants/pages/mainPage';
import Typography from '../Typography';
import Image from 'next/image';

const CommunityComponent = () => {
  return Community.map((item) => (
    <Typography
      preset="community"
      key={item.alt}
      className={`${item.alt === 'business' ? 'flex-row-reverse' : 'flex-row'}`}
    >
      <Image
        src={`/assets/image/${item.src}.jpeg`}
        alt={`${item.alt}`}
        width={445}
        height={265}
        className="rounded-2xl"
      />
      <div>
        <h3 className="font-bold text-[30px] max-lg:text-[26px] max-g:text-[23px] max-ml:text-[21px] max-sm:leading-6 text-blue-300 mb-[17px]">
          {item.title}
        </h3>
        <p className="text-[25px] max-lg:text-[21px] max-g:text-[18px] max-ml:text-[16px] text-white  ">
          {item.content}
        </p>
      </div>
    </Typography>
  ));
};

export default CommunityComponent;
