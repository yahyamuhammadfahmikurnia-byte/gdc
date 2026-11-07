import exampleArtwork from "../imgidea/Example project artwork(2).svg";
import decorativeCode from "../imgidea/Decorative code(1).svg";
import sectionLabel from "../imgidea/Section label.svg";
import heading from "../imgidea/Heading.svg";
import textLink from "../imgidea/Text link(1).svg";

export default function Idea() {
  return (
    <section className="w-full bg-white px-6 py-16">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,650px)_minmax(0,1fr)] lg:gap-16">
        <div className="relative w-full">
          <img
            src={exampleArtwork}
            alt="Example project brief: a little less friction, a better campus day"
            className="block h-auto w-full"
          />
          <a href="" target = "_blank">
          <img
            src={decorativeCode}
            alt=""
            aria-hidden="true"
            className="absolute right-[5%] top-[7.5%] h-auto w-6"
          />
          </a>
        </div>
        <div className="flex min-w-0 flex-col items-start gap-6">
          <img src={sectionLabel} alt="" className="max-w-full" />
           <p className="text-5xl font-google font-semibold whitespace-nowrap">Your next project could <br/> start on campus.</p>
          <p className="font-google text-xl text-gray-500 ">
            What if finding a study partner, sharing resources, or navigating campus felt easier? Small, familiar problems can be the beginning of meaningful work.
          </p>
          <p className="font-google text-lg text-gray-500 md:text-xl">
            Bring research, design, and development together. Try an idea, get feedback, and make the next version better.
          </p>
          <a href="" target="_blank" rel="noreferrer">
             <p className="font-google font-medium text-lg text-[#1967D2] " >
              Explore project-based learning <strong>→</strong>
             </p> 
          </a>
        </div>
      </div>
    </section>
  );
}