import Button from '@/components/atoms/Button';
import Plug from '@/components/atoms/Plug';
import Typography from '@/components/atoms/Typography';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full flex flex-col min-h-screen overflow-hidden xl:mt-[80px] lg:mt-[70px] md:mt-[64px] bg-black">
      {/* <Typography  preset="common1" color="whited" component="p">
            some text
         </Typography>
           <Typography  preset="header1" color="whited" component="h1">
            some text
         </Typography> */}

      {/* <Plug>
            <Typography>
               kekke
            </Typography>
         </Plug> */}
      <div className="mb-[80px] mt-[78px] max-lg:mt-[0px] absolute left-0 top-0 w-full h-full">
        <Image
          src="/assets/image/main-background.jpeg"
          width={2200}
          height={1275}
          alt="main-background"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="max-w-[1360px] w-full mx-auto px-[40px] z-[2]">
        <div className="pt-[176px] pb-[263px] flex-wrap items-center">
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[14px]">
              <h1 className="font-semibold text-[60px] leading-[1.2] text-white mb-0 max-lg:text-[50px]  max-md:text-[30px] max-md:text-left">
                Онлайн-курсы программирования
              </h1>
              <div>
                <p className="font-normal text-[26px]  leading-[1.2] text-white mb-0 max-md:text-[20px] ">
                  {' '}
                  с последующим трудоустройством в Москве <br /> или
                  Санкт-Петербурге
                </p>
              </div>
            </div>

            {/* Plages */}
            <div className="flex flex-col gap-[60px]">
              <ul className="flex flex-wrap gap-[10px] mb-0 ">
                <Link href="/java">
                  <Plug background="turquoise">
                    <Typography color="grayed" preset="header1">
                      Java
                    </Typography>
                  </Plug>
                </Link>
                {/* <Link href="/frontend">
                  <Typography preset="plug" component="li" color="turquoise">
                    Frontend
                  </Typography>
                </Link>
                <Link href="/qa-manual">
                  <Typography preset="plug" component="li" color="swamp">
                    QA manual
                  </Typography>
                </Link>
                <Link href="/golang">
                  <Typography preset="plug" component="li" color="blue">
                    Golang
                  </Typography>
                </Link> */}
              </ul>
              <Button>Поступить в ката</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
