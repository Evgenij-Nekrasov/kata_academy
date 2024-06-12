interface StepProp {
  number: string;
  description: string;
}

export const Step = ({ number, description }: StepProp) => (
  <div className="flex items-start mb-8 ">
    <div className="flex-shrink-0 z-10">
      <span className="bg-white border-2 border-black rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold">
        {number}
      </span>
    </div>
    <div className="ml-6">
      <p className="text-gray-400 text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base">
        {description}
      </p>
    </div>
  </div>
);
