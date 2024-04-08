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
          className="object-cover w-full h-full max-md:w-[900px] max-md:h-[700px] max-sm:w-[700px] max-sm:h-[500px]"
        />
      </div>
      <div className="max-w-[1360px] w-full mx-auto px-[40px] z-[2] max-sm:px-[30px]">
        <div className="pt-[190px] pb-[263px] flex-wrap items-center max-lg:pt-[100px] max-md:pt-[150px] max-md:pt-[190px] max-sm:pt-[220px]">
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[14px]">
              <h1 className="font-semibold text-[60px] leading-[1.2] text-white mb-0 max-lg:text-[50px] max-sm:text-[40px]  max-md:text-left">
                Онлайн-курсы программирования
              </h1>
              <div>
                <p className="font-normal text-[26px]  leading-[1.4] text-white mb-0 max-md:text-[23px] max-sm:text-[18px] tracking-wider">
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
                  <Plug background="lilac">
                    <Typography color="grayed" preset="plug">
                      Java
                    </Typography>
                  </Plug>
                </Link>
                <Link href="/frontend">
                  <Plug background="turquoise">
                    <Typography color="grayed" preset="plug">
                      Frontend
                    </Typography>
                  </Plug>
                </Link>
                <Link href="/qa-manual">
                  <Plug background="swamp">
                    <Typography color="grayed" preset="plug">
                      QA manual
                    </Typography>
                  </Plug>
                </Link>
                <Link href="/golang">
                  <Plug background="blue">
                    <Typography color="grayed" preset="plug">
                      Golang
                    </Typography>
                  </Plug>
                </Link>
              </ul>
              <Button background="swamp">
                <Typography color="grayed" preset="buttonBig">
                  Поступить в ката
                </Typography>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
