
import invitationPanel from "../imgfaq/Invitation panel(4).svg";
import action from "../imgfaq/Action.svg";
import textLink from "../imgfaq/Text link.svg";
import rectangle from "../imglearningformat/Rectangle.svg";
import groupTitle from "../imglearningformat/Group title.svg";
import socialHandle from "../imglearningformat/Social handle.svg";
import socialChannels from "../imglearningformat/Social channels.svg";
import description from "../imglearningformat/Description.svg";
import footerNote from "../imglearningformat/Footer note.svg";
import brandSignature from "../imglearningformat/Brand signature.svg";

export default function BringYourCuriosity() {
  return (
    <>
     <section className="w-full h-[450px] bg-white py-[70px] overflow-hidden">
        <div className="translate-x-[45px]">
          <img
            src={invitationPanel}
            alt="Invitation panel"
            className="translate-x-[125px]"
          />
          <div className="w-[8px] h-[8px] bg-[#4285F4] rounded-full flex items-center translate-x-[175px] translate-y-[-210px]">
            <p className="font-google whitespace-nowrap font-medium text-gray-500 translate-x-[15px]">
              YOUR NEXT CHAPTER
            </p>
          </div>
          <p className="text-5xl translate-x-[170px] translate-y-[-190px] font-google font-semibold whitespace-nowrap">
            Bring your curiosity.
            <br />
            We'll build from there.
          </p>
          <p className="text-xl translate-x-[170px] text-gray-600 translate-y-[-170px] font-google">
            Find a learning track, meet a collaborator, or start a conversation
          </p>
          <div className="translate-x-[1050px] translate-y-[-190px] grid gap-y-5">
            <a href="">
              <img
                src={action}
                alt="Action"
                className="translate-y-[-120px]"
              />
            </a>
            <a href="">
              <img
                src={textLink}
                alt="Text link"
                className="translate-x-[20px] translate-y-[-110px]"
              />
            </a>
          </div>
        </div>
      </section>

    
<section id="contact" className="w-full bg-gray-200 font-google">
  <div className="mx-auto max-w-[1600px] px-8 py-16 lg:px-20">
    <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.7fr_0.6fr_0.8fr] lg:gap-16">
      <div>
        <div className="flex items-center gap-4">
          <img
            src={rectangle}
            alt="Logo GDGoC"
            className="w-[75px] h-auto"
          />
          <div>
            <p className="text-2xl font-google">
              Google Developer Groups
            </p>
            <p className="font-google">
              <span className="text-blue-600">On campus</span>
              {" "}• Universitas Gadjah Mada
            </p>
          </div>
        </div>
        <p className="mt-5 text-lg text-gray-500">
          A student community for curious minds, shared learning, and
          <br className="hidden lg:block" />
          {" "}technology with purpose
        </p>
      </div>

      <div className="flex flex-col gap-5 text-xl">
        <p className="font-semibold">Explore</p>
        <a href="/" className="hover:text-blue-600">Home</a>
        <a href="/about" className="hover:text-blue-600">About</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </div>

      <div className="flex flex-col items-start gap-6">
        <img src={groupTitle} alt="Keep in the loop" />
        <img src={socialHandle} alt="Social handle" />
        <img src={socialChannels} alt="Social channels" />
        <img src={description} alt="Description" />
      </div>
    </div>

    <div className="mt-20 border-t border-gray-400 pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <img src={footerNote} alt="Footer note" className="max-w-full h-auto" />
      <img src={brandSignature} alt="Brand signature" className="max-w-full h-auto" />
    </div>
  </div>
</section>

    </>
  );
}
