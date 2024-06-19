import Image from 'next/image';
import Link from 'next/link';

import {
  AdmissionButton,
  Advantages,
  Button,
  CardWrapper,
  Prize,
  Typography,
  WrapperAdvantages,
} from '@/components';

import {
  adventagesList,
  courseFeatures,
  graduatesOfCourses,
  programsConditions,
  steps,
} from './constant';
import Graduates from '@/components/layouts/graduates/Graduates';
import Accordion from '@/components/molecules/Accordion/Accordion';
import { accordionItems } from '@/components/molecules/Accordion/constant';
import Circle from '@/components/atoms/CircleTechnology';
import ApplicationDeveloper from '@/components/atoms/ApplicationDeveloper';
import { Step } from '@/components/atoms/StepLearn';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Java',
  description: 'The page of the online Java programming course',
};

const Java = () => {
  return (
    // Main image
    <>
      <div className={`mt-20 max-g:mt-0 pt-11 pb-52 max-g:pb-40 bg-darkOrange`}>
        <CardWrapper>
          <div className="[&>*]:text-black mt-20">
            <Typography
              preset="header1"
              className="max-lg:text-3xl max-sm:text-2xl"
            >
              Обучаем <span className="bg-lilac">Java-разработчиков</span>{' '}
              online
            </Typography>
            <p className="mt-5">
              Начни учиться бесплатно — <b>оплата после трудоустройства</b>
            </p>
            <p className="mt-14">Идёт набор на поток, дата старта:</p>
            <Typography preset="header2" className="max-lg:text-2xl">
              17 июня 2024
            </Typography>
            <p className="mt-5">Приём тестового задания до:</p>
            <Typography
              className="block mb-10 max-lg:text-2xl"
              preset="header2"
            >
              10 июня 2024
            </Typography>
            <Link href="https://t.me/Evgenie061" target="_blank">
              <Button
                className="hover:bg-lilac max-sm:w-full"
                background="transparent"
              >
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
          <div className="max-g:hidden flex items-center  justify-center bg-lilac relative w-[40vw] h-[40vw] rounded-[50%]">
            <Image
              src={`/assets/icons/java.svg`}
              alt="java-course"
              width={180}
              height={180}
              style={{ height: '80%', width: '75%', position: 'absolute' }}
            />
          </div>
        </CardWrapper>
      </div>

      {/* Prize component */}

      <Prize
        wrapperStyle={'mt-[-160px]'}
        background="bg-[#434343]"
        title={
          <>
            <h2 className="h2 max-md:text-[27px] max-sm:text-[23px] max-sm:text-[20px] md:leading-10">
              Kata Academy - это <span className="bg-lilac">новый подход</span>к
              обучению программистов
            </h2>
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

      <WrapperAdvantages>
        {adventagesList.map((adventageItem, i) => (
          <Advantages
            key={i}
            image={`${adventageItem.src}`}
            alt={`${adventageItem.alt}`}
            paragraph={`${adventageItem.underTitle}`}
            title={`${adventageItem.title}`}
          />
        ))}
      </WrapperAdvantages>

      <Prize
        background="bg-violet"
        title={
          <>
            <h2 className="h2 max-md:text-center max-md:text-[27px] max-sm:text-[23px] md:leading-10">
              Kata Academy - это новый подход к обучению программистов
            </h2>
          </>
        }
        paragraph={
          <>
            <p className="my-[40px] max-md:text-center text-white leading-[140%] text-2xl max-sm:text-[17px]">
              С нашей поддержкой ты 100% устроишься на работу и станешь крутым
              Frontend-разработчиком уже в этом году.
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

      {/* Header of money*/}
      <Typography
        preset="header1"
        className="container flex justify-center max-lg:text-3xl max-md:text-2xl  max-md:text-center max-m:text-xl"
      >
        Оплата после трудоустройства или во время обучения
      </Typography>
      <Prize
        wrapperStyle={'mt-8'}
        background="bg-violet"
        title={
          <>
            <h2 className="text-[27px] max-md:text-[23px] max-sm:text-[20px] max-m:text-[16px] md:leading-10">
              Минимальная гарантированная зарплата по договору — 80 000 рублей
            </h2>
          </>
        }
      />

      {/* Graduates of courses */}
      <div className="container max-sm:px-5  [&>*]:mb-5">
        <h2 className="h2 max-sm:text-center">
          <span className="bg-lilac">Эти ребята смогли - сможешь и ты!</span>
        </h2>
        <p className="paragraph">
          Сомневаешься? Тогда скорее читай отзывы наших выпускников, которые
          успешно работают на позициях Frontend Developer и Backend Developer.
          За 6 лет мы выпустили более 2500 программистов в разных странах:
          России, СНГ, Европе, США и Канаде.
        </p>
        <p className="paragraph">
          Еще больше отзывов об обучении в KATA Academy (ex-Java Mentor) — в
          нашей группе
        </p>
      </div>

      <WrapperAdvantages>
        {graduatesOfCourses.map((adventageItem, i) => (
          <Graduates
            key={i}
            image={`${adventageItem.src}`}
            alt={`${adventageItem.alt}`}
            title={`${adventageItem.name}`}
            paragraph={`${adventageItem.text}`}
          />
        ))}
      </WrapperAdvantages>

      {/* Employment opportunities */}
      <h2 className="container  max-lg:text-3xl max-md:text-2xl">
        Готов играть по нашим правилам? Тогда отсчитывай {}
        <span className="bg-violet">9 месяцев</span> до трудоустройства {}
        <span className="bg-violet"> Java-разработчиком</span>, и поехали!
      </h2>

      <WrapperAdvantages>
        <div className="grid grid-cols-2 max-md:grid-cols-1 max-w-full gap-7">
          {courseFeatures.map((feature, i) => (
            <AdmissionButton
              key={i}
              title={<h2 className="h2 text-black">{feature.title}</h2>}
              imageUnderTitle={
                <p className="paragraph">{feature.description}</p>
              }
              background={feature.background}
            />
          ))}
        </div>
      </WrapperAdvantages>

      {/* Training program */}
      <div className="container ">
        <h2 className="max-lg:text-3xl max-md:text-2xl">Программа обучения</h2>
        <div>
          <Accordion items={accordionItems} />
        </div>
      </div>

      {/* Circle */}
      <div className="container">
        <h2 className="mt-24 max-lg:text-3xl max-md:text-2xl">
          Технологии, которыми ты будешь владеть
        </h2>
        <div className="mt-12 flex flex-wrap max-sm:justify-center gap-8 mt-10 mb-40 max-md:mb-28">
          <Circle border="violet">
            <Image
              width={70}
              height={70}
              className="object-cover max-g:w-[60px] max-g:h-[60px]"
              src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
              alt="Fapache-tomcat"
            />
          </Circle>
          <Circle border="violet">
            <Image
              width={70}
              height={70}
              className="object-cover max-g:w-[60px] max-g:h-[60px]"
              src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
              alt="Fapache-tomcat"
            />
          </Circle>
          <Circle border="violet">
            <Image
              width={70}
              height={70}
              className="object-cover max-g:w-[60px] max-g:h-[60px]"
              src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
              alt="Fapache-tomcat"
            />
          </Circle>
        </div>
      </div>

      {/* Program conditions */}
      <Typography
        component="div"
        preset="header1"
        className="text-center max-lg:text-3xl max-md:text-2xl "
      >
        <p className="container">Условия участия в программе</p>
      </Typography>

      <ul className="container max-sm:px-3">
        <div className="mx-56 max-lg:mx-40 max-md:mx-0 mt-7">
          {programsConditions.map((program, index) => (
            <li key={index} className="flex items-center mb-6">
              <Image
                alt="icons-check-mark"
                src="/assets/image/checkmark.png"
                width={100}
                height={100}
                className="max-sm:w-20 max-sm:h-10"
              />
              <Typography preset="plug" className="max-lg:text-base">
                <p>{program.text}</p>
              </Typography>
            </li>
          ))}
        </div>
      </ul>

      <Prize
        wrapperStyle={'mt-40 max-md:mt-28 justify-center'}
        background="border-violet  lg:border-2 max-lg:border-t-2 max-lg:border-b-2"
        title={
          <>
            <h2 className="text-center text-[27px] max-lg:text-[23px] max-md:text-[20px] max-m:text-[16px] md:leading-10">
              Для участия необходимо пройти входное тестирование
            </h2>
          </>
        }
        button={
          <Link href="https://t.me/Evgenie061">
            <Button
              className=" min-w-full max-sm:mt-[20px] max-m:mt-[30px] mt-5"
              background="orange"
            >
              <Typography
                className="text-base max-lg:text-sm  max-md:text-xs  max-sm:h-10 hover:border-black hover:text-black"
                color="whited"
                preset="buttonBig"
              >
                Отправить заявку
              </Typography>
            </Button>
          </Link>
        }
      />

      {/* whatDeveloperDo */}
      <div className="container max-sm:p-5">
        <h2 className="h2 max-sm:text-center mb-16">
          Что разрабатывет Frontend Developer?
        </h2>
        <ApplicationDeveloper />
      </div>

      <div className="container">
        <h2 className="h2 max-sm:text-center mb-16">Как устроено обучение</h2>
        <div className="max-w-2xl mx-auto p-4 max-sm:p-0 mt-10 mb-28 relative">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={step.number}
              description={step.description}
            />
          ))}
        </div>
      </div>

      {/* Training program */}
      <div className="container">
        <h2 className="max-lg:text-3xl max-md:text-2xl">FAQ</h2>
        <Accordion items={accordionItems} />
      </div>
    </>
  );
};

export default Java;
