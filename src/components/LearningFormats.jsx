import sectionLabel from "../imglearningformat/Section label(5).svg";
import heading from "../imglearningformat/Heading(2).svg";
import programFormat from "../imglearningformat/Program format.svg";
import programFormatOne from "../imglearningformat/Program format-1.svg";
import programFormatTwo from "../imglearningformat/Program format-2.svg";
import rectangle from "../imglearningformat/Rectangle.svg";
import groupTitle from "../imglearningformat/Group title.svg";
import socialHandle from "../imglearningformat/Social handle.svg";
import socialChannels from "../imglearningformat/Social channels.svg";
import description from "../imglearningformat/Description.svg";
import footerNote from "../imglearningformat/Footer note.svg";
import brandSignature from "../imglearningformat/Brand signature.svg";
import book from "../imglearningformat/Format icon.svg";
import square from "../imglearningformat/Format icon(1).svg";
import person from "../imglearningformat/Format icon(2).svg";
import emptyPanels from "../imglearningformat/Program format(4).svg";
import emptyPanel from "../imglearningformat/Program format(7).svg";

export default function LearningFormats() {
  return (
    <section className="w-full bg-gray-100 py-32">
      <div className="translate-y-[-50px]">
        <div className="flex flex-col items-start gap-8 translate-x-[150px]">
          <img src={sectionLabel} alt="Section label" />
          <p className="text-6xl font-google font-semibold whitespace-nowrap">Less watching.More making.</p>
        </div>

        <div>
          <p className="mt-4 translate-x-[148px] text-xl font-google relative z-10 text-gray-500">
            Learn in a way that turns a new concept into something you can actually use.
          </p>

          <div className="flex translate-y-[30px] items-center justify-center gap-9">
            <div className="relative">

              <img src={emptyPanel} alt="Program format" />
              <div>
                <a href="" target="_blank">
                  <img src={book} alt="book" className="absolute left-[30px] top-[30px] " />
                </a>
                <p className="absolute left-[30px] top-[70px] z-10 font-google text-3xl font-semibold">
                  Study together
                </p>


                <p className=" absolute left-[30px] top-[120px] text-lg text-gray-500 font-google">
                  Work through foundations in peer learning sessions. Bring your questions; leave with a<br /> next step
                </p>
                <a href="" target="_blank">
                  <p className="font-google translate-x-[30px] text-[#1967D2] font-medium translate-y-[-45px]">
                    Study groups & guided practice
                  </p>
                </a>
              </div>
            </div>
            <div>
              <img src={emptyPanel} alt="Program format" />
              <div className="relative translate-x-[04px] translate-y-[-291px]">
                <a href="" target="_blank">
                  <img src={square} alt="book" className="absolute left-[30px] top-[30px] " />
                </a>
                <p className="absolute left-[30px] top-[70px] z-10 font-google text-3xl font-semibold">
                  Try it hands-on
                </p>
                <p className=" absolute left-[30px] top-[120px] text-lg text-gray-500 font-google">
                  Explore a tool or technique in a workshop,<br />then put it to work in a small experiment
                </p>
                <a href="" target="_blank">
                  <p className="font-google translate-x-[30px] text-[#1967D2] font-medium translate-y-[247px]">
                    Workshops & technical sessions
                  </p>
                </a>
              </div>
            </div>
            <div>
              <img src={emptyPanel} alt="Program format" />
              <div className="relative translate-x-[04px] translate-y-[-291px]">
                <a href="" target="_blank"> <img src={person} alt="book" className="absolute left-[30px] top-[30px] " />
                </a>
                <p className="absolute left-[30px] top-[70px] z-10 font-google text-3xl font-semibold">
                  Share the process
                </p>
                <p className=" absolute left-[30px] top-[120px] text-lg text-gray-500 font-google">
                  Exchange feedback, explain your decisions,<br />and learn from different ways of thinking.
                </p>
                <a href="" target="_blank">
                  <p className="font-google translate-x-[30px] text-[#1967D2] font-medium translate-y-[247px]">
                    Project circles & sharing sessions
                  </p>
                </a>
              </div>

            </div>
          </div>
        </div>

        <div className="flex translate-x-[160px] translate-y-[130px] items-center">
          <img src={rectangle} alt="Logo icon" />
          <p className="translate-x-[10px] translate-y-[-7px] text-2xl font-google">
            Google Developer Groups
          </p>
          <div class="translate-y-[5px]">
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
        <a href="https://www.instagram.com/gdgoc.ugm?utm_source=ig_web_button_share_sheet&srtk=ZDNlZDc0MzIxNw==" target="_blank">
        <img src={socialHandle} alt="Social handle" />
        </a>
                <a href="https://www.youtube.com/@gdgocugm" target="_blank">
        <img src={socialChannels} alt="Social channels" />
        </a>
        <img src={description} alt="Description" />
      </div>

      <div className="mx-auto translate-y-[-80px] w-[85%]  border-t border-gray-400"></div>
      <div >
        <img src={footerNote} className="translate-x-[165px]" />
        <img src={brandSignature} className="translate-x-[165px] translate-y-[60px]" />
      </div>
    </section>
  );
}