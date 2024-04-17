import './style.css';

const Conacts = () => {
  return (
    <div className="mb-32 mt-28">
      <div className="container !max-w-[1300px] mx-auto">
        <h1 className="text mb-16">Свяжитесь с нами</h1>
        <div className="grid grid-cols-7 grid-rows-10  h-[940px] gap-4">
          <div className="row-span-8 col-span-4 styleGrid"></div>
          <div className="row-span-4 col-span-3 styleGrid"></div>
          <div className="row-span-4 col-span-3 styleGrid"></div>
          <div className="row-span-2 col-span-7 styleGrid"></div>
        </div>
      </div>
    </div>
  );
};

export default Conacts;
