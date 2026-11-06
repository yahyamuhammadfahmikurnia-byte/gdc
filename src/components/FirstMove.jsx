import sectionLabel from "../firstmoveimg/Section label(6).svg";
import heading from "../firstmoveimg/Heading(3).svg";
import journeyStep from "../firstmoveimg/Journey step.svg";
import journeyStepOne from "../firstmoveimg/Journey step-1.svg";
import journeyStepTwo from "../firstmoveimg/Journey step-2.svg";
import belongingStatement from "../firstmoveimg/Belonging statement(1).svg";

export default function FirstMove() {
  return (
    <section className="w-full bg-white py-[70px]">
      <div className="flex flex-col items-start gap-8 translate-x-[110px]">
          <img src={sectionLabel} className="" />
          <img src={heading} />
      <div className="flex items-center translate-x-[60px] gap-10">
        <img src={journeyStep} />
        <img src={journeyStepOne} />
        <img src={journeyStepTwo} />
      </div>
      </div>
      <div className="translate-x-[0px]  translate-y-[70px]">
        <img src={belongingStatement} className="w-[5000px]" />
      </div>
    </section>
  );
}