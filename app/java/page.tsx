import { Button, CardWrapper, Prize, Typography } from '@/components';
import Image from 'next/image';
import Link from 'next/link';

const Java = () => {
  return (
    <>
      <div className={`mt-20 pt-10 pb-52 bg-darkOrange`}>
        <CardWrapper>
          <div className="[&>*]:text-black mt-20">
            <Typography preset="header1">
              Обучаем <span className="bg-lilac">Java-разработчиков</span>{' '}
              online
            </Typography>
            <p className="mt-5">
              Начни учиться бесплатно — <b>оплата после трудоустройства</b>
            </p>
            <p className="mt-14">Идёт набор на поток, дата старта:</p>
            <Typography preset="header2">17 июня 2024</Typography>
            <p className="mt-5">Приём тестового задания до:</p>
            <Typography className="block mb-10" preset="header2">
              10 июня 2024
            </Typography>
            <Link href="https://t.me/Evgenie061" target="_blank">
              <Button className="hover:bg-lilac" background="transparent">
                <Typography
                  className="text-sm hover:text-black"
                  color="whited"
                  preset="buttonBig"
                >
                  Поступить в ката
                </Typography>
              </Button>
            </Link>
          </div>
          <div
            className={`flex items-center justify-center bg-lilac w-[95%] h-[115%] max-g:w-[160px] max-g:h-[160px] max-md:w-[130px] max-md:h-[130px] max-sm:w-[110px] max-sm:h-[110px] max-m:w-[95px] max-m:h-[95px] ml-[20px] max-md:ml-[40px] max-sm:ml-[70px] max-m:ml-[100px] rounded-[50%]`}
          >
            <Image
              src={`/assets/icons/java.svg`}
              alt="java-course"
              width={480}
              height={480}
              className="max-g:w-[120px] max-md:w-[95px] max-sm:w-[85px] max-m:w-[75px]"
            />
          </div>
        </CardWrapper>
      </div>

      <Prize
        blockStyle={'mt-[-160px]'}
        title={
          <>
            Kata Academy - это <span className="bg-lilac">новый подход</span>к
            обучению программистов
          </>
        }
        paragraph={
          <>
            <p className="my-[40px] text-white leading-[140%] text-2xl max-sm:text-[15px]">
              {'>'} 2500 выпускников за 6 лет уже устроились разработчиками.
            </p>
          </>
        }
        image={
          <>
            <div className="mt-0 mx-auto mb-[45px]">
              <Image
                src="/assets/icons/award.svg"
                alt="award"
                width={250}
                height={250}
                className="max-md:w-[190px] max-md:h-[190px] max-sm:w-[160px] max-sm:h-[160px] "
              />
            </div>
          </>
        }
      />
    </>
  );
};

export default Java;
