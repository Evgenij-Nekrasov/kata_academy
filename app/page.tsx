import Button from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
   return (
      <div className="w-full flex flex-col min-h-screen overflow-hidden xl:mt-[80px] lg:mt-[70px] md:mt-[64px] bg-[#777]">
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
         <div className="mb-[80px] mt-[78px] max-lg:mt-[0px] absolute left-0 top-0 w-full h-full z-[-1]">
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
                           {" "}
                           с последующим трудоустройством в Москве <br /> или
                           Санкт-Петербурге
                        </p>
                     </div>
                  </div>
                  <div className="flex flex-col gap-[60px]">
                     <ul className="flex flex-wrap gap-[10px] mb-0 ">
                        <li className="bg-[#8c9efb] p-[6px]">
                           <Link
                              href="/java"
                              className="font-semibold leading-[1.2] text-[#29292f] text-[20px]"
                           >
                              Java
                           </Link>
                        </li>
                        <li className="bg-[#89e1f3] p-[6px]">
                           <Link
                              href="/frontend"
                              className="font-semibold leading-[1.2] text-[#29292f] text-[20px]"
                           >
                              Frontend
                           </Link>
                        </li>
                        <li className="bg-[#92c29c] p-[6px]">
                           <Link
                              href="/qa-manual"
                              className="font-semibold leading-[1.2] text-[#29292f] text-[20px]"
                           >
                              QA manual
                           </Link>
                        </li>
                        <li className="bg-[#474ce1] p-[6px]">
                           <Link
                              href="/golang"
                              className="font-semibold leading-[1.2] text-[#29292f] text-[20px]"
                           >
                              Golang
                           </Link>
                        </li>
                     </ul>
                     <Button>Поступить в ката</Button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
