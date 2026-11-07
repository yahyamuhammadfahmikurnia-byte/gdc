import campusCommunity from "../imgHomeIntro/a campus a community.svg";
import heading from "../imgHomeIntro/Heading.svg";
import moreAbout from "../imgHomeIntro/more about ugm.svg";
import attribute from "../imgHomeIntro/Attribute.svg";
import attributeOne from "../imgHomeIntro/Attribute-1.svg";
import attributeTwo from "../imgHomeIntro/Attribute-2.svg";

export default function HomeIntro() {
  return (
    <section className="w-full bg-white py-20 translate-x-[22px]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-8">
          <img
            src={campusCommunity} className="w-[200px]" alt="A campus a community"/>
          <p className="text-6xl font-google font-semibold whitespace-nowrap">Not just learning<br/>tech.<br/>Finding your people. </p>
          <a href="./about">
            <img
              src={moreAbout}
              className="w-[300px] max-w-full -translate-y-[10px]"
              alt="More about GDGoC UGM"
            />
          </a>
        </div>
        <div className="min-w-0 space-y-7 ">
          <p className="font-google text-[25px] leading-relaxed text-gray-500">
            Google Developer Groups on Campus, Universitas Gadjah Mada
            bring students together around one simple idea:
            we can go <strong>further</strong> when we{" "}
            <strong>learn</strong> with each other.
          </p>
           <p className="font-google text-[22px] leading-relaxed text-gray-500">
            From your first line of code to your next product idea, there's room to ask questions, share what you know,and try something new.
          </p>
          <div class = "flex items-center gap-6">
          <img src={attribute}/>
          <img src={attributeOne}/>
          <img src={attributeTwo}/>
          </div>
        </div>
      </div>
    </section>
  );
}


