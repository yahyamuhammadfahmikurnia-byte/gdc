import sectionLabel from "../imgfirstmove/Section label(6).svg";
import heading from "../imgfirstmove/Heading(3).svg";
import journeyStep from "../imgfirstmove/Journey step.svg";
import journeyStepOne from "../imgfirstmove/Journey step-1.svg";
import journeyStepTwo from "../imgfirstmove/Journey step-2.svg";
import belongingStatement from "../imgfirstmove/Belonging statement(1).svg";
import star from "../imgfirstmove/Community spark.svg";

export default function FirstMove() {
  return (
    <section className="w-full bg-white py-[70px]">
      <div className="flex flex-col items-start gap-8 translate-x-[110px]">
        <img src={sectionLabel} className="" />
        <p className="text-6xl font-google font-semibold whitespace-nowrap">You don't need to have it all<br />figured it out.</p>
        <div className="flex items-center translate-x-[60px] gap-10">
          <img src={journeyStep} />
          <img src={journeyStepOne} />
          <img src={journeyStepTwo} />
        </div>
      </div>

      <div className="-translate-x-[0px] grid gap-y-8 translate-y-[80px] bg-[#EAF5ED] py-25">
        <p className="text-5xl font-google text-center font-semibold whitespace-nowrap">Different majors.Different starting points.<br />A place for all of them.</p>
        <p className="font-google text-center text-gray-500 text-lg">You don’t have to be the most experienced person in the room. Curiosity, kindness, and a willingness to learn are a good place to start. </p>
        <img src={star} className="hidden lg:block absolute left-[60px] top-1/2 -translate-y-1/2 w-[110px] " alt="Star" />
      </div>
    </section>
  );
}