import sectionLabel from "../learningformatimg/Section label(5).svg";
import heading from "../learningformatimg/Heading(2).svg";
import programFormat from "../learningformatimg/Program format.svg";
import programFormatOne from "../learningformatimg/Program format-1.svg";
import programFormatTwo from "../learningformatimg/Program format-2.svg";
import rectangle from "../learningformatimg/Rectangle.svg";
import groupTitle from "../learningformatimg/Group title.svg";
import socialHandle from "../learningformatimg/Social handle.svg";
import socialChannels from "../learningformatimg/Social channels.svg";
import description from "../learningformatimg/Description.svg";
import footerNote from "../learningformatimg/Footer note.svg";
import brandSignature from "../learningformatimg/Brand signature.svg";

export default function LearningFormats() {
  return (
    <section className="w-full bg-gray-100 py-32">
      <div className="translate-y-[-50px]">
        <div className="flex flex-col items-start gap-8 translate-x-[150px]">
          <img src={sectionLabel} alt="Section label" />
          <img src={heading} alt="Heading" />
        </div>

        <div>
          <p className="mt-4 translate-x-[148px] text-xl font-google text-gray-500">
            Learn in a way that turns a new concept into something you can actually use.
          </p>
          <div className="flex translate-y-[30px] items-center justify-center gap-9">
            <img src={programFormat} alt="Program format" />
            <img src={programFormatOne} alt="Program format" />
            <img src={programFormatTwo} alt="Program format" />
          </div>
        </div>

        <div className="flex translate-x-[160px] translate-y-[130px] items-center">
          <img src={rectangle} alt="Logo icon" />
          <p className="translate-x-[10px] translate-y-[-7px] text-2xl font-google">
            Google Developer Groups
          </p>
          <div class = "translate-y-[5px]">
            <a href=" " target="_blank">
              <p className="translate-x-[-270px] translate-y-[30px] font-google text-blue-600">
                On campus
              </p>
            </a>
            <p className="translate-x-[-180px] translate-y-[6px]">
              • Universitas Gadjah Mada
            </p>
          </div>
        </div>

        <p className="translate-x-[160px] translate-y-[140px] text-lg font-google text-gray-500">
          A student community for curious minds, shared learning, and<br /> technology with purpose
        </p>
      </div>

      <div className="-translate-x-[-850px] translate-y-[-30px] grid gap-y-5 font-google text-xl">
        <p>
          <strong>Explore</strong>
        </p>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>

      <div className="translate-x-[1200px] translate-y-[-195px] grid gap-y-7">
        <img src={groupTitle} alt="Group title" />
        <img src={socialHandle} alt="Social handle" />
        <img src={socialChannels} alt="Social channels" />
        <img src={description} alt="Description" />
      </div>

      <div className="mx-auto translate-y-[-80px] w-[85%]  border-t border-gray-400"></div>
      <div >
        <img src={footerNote} className="translate-x-[165px]"/>
        <img src={brandSignature} className="translate-x-[165px] translate-y-[60px]"/>
      </div>
    </section>
  );
}