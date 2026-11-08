
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
              <a href="https://www.instagram.com/gdgoc.ugm/" target="_blank"rel="noopener noreferrer"  className="relative z-20 inline-block" >
                <img src={socialHandle} alt="Social handle" />
              </a>
              <a href="https://www.youtube.com/@gdgocugm" target="_blank">
                <img src={socialChannels} alt="Social channels" />
              </a>
              <img src={description} alt="Description" />
            </div>
          </div>

          <div className="mt-20 border-t border-gray-400 pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <img src={footerNote} alt="Footer note" className="max-w-full h-auto" />
            <img src={brandSignature} alt="Brand signature" className="max-w-full h-auto" />
          </div>
        </div>
      </section>


  );
}
