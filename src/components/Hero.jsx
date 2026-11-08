import bubble from "../imghero/Community colors.svg";
const publicImages = `${import.meta.env.BASE_URL}images/`;


export default function Hero() {
  return (
    <>
      <section id="homepage" className="w-full bg-white" >
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-8 px-5 py-8 lg:grid-cols-2 lg:gap-6 lg:px-8 lg:py-10 ">
          <div className="flex min-w-0 flex-col items-start gap-4 md:gap-5">
            <img src={`${publicImages}tulisan kecil.png`} alt="gdgoc 26/27" className="h-auto w-[120px] md:w-[160px]" />
            <p className="text-8xl font-google font-semibold whitespace-nowrap">Big ideas.</p>
            <p className="text-8xl font-google text-[#1967D2] font-semibold text whitespace-nowrap">Built together .</p>
            <p className="max-w-[560px] text-base leading-relaxed text-gray-500 md:text-[1.2rem] whitespace-nowrap lg:text-[1.45rem] font-google ">
              A place for curious minds at{" "}
              <strong>Universitas Gadjah Mada</strong>{" "}
              to learn,<br /> connect, and build technology
              that matters.
            </p>
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <a href="#tracks">
                <img src={`${publicImages}track kecil.svg`} alt="find your track" className="h-auto max-w-[180px] md:max-w-[220px]" />
              </a>
              <a href="">
                <img src={`${publicImages}get to know us.svg`} alt="get to know" className="h-auto max-w-[180px] md:max-w-[220px]" />
              </a>
            </div>


            <div className="flex items-center flex-nowrap text-gray-700">
              <div className="flex shrink-0 translate-x-[30px] items-center scale-450 gap-[2px]">
                {[bubble].map((file) => (
                  <img
                    key={file}
                    src={bubble}
                    alt=""
                    className="h-[14px] w-[14px] shrink-0"
                  />
                ))}
              </div>
              <p className="ml-3 whitespace-nowrap translate-x-[50px] font-google text-lg text-gray-500">
                Different backgrounds. A shared curiosity.
              </p>
            </div>


          </div>
          <div className="flex w-full min-w-0 items-center justify-center lg:justify-end lg:translate-y-[95px]">
            <img
              src={`${publicImages}Ideas coming together.png`}
              alt="Ideas coming together"
              className="h-auto w-[360px] max-w-[100%] md:w-[520px] lg:w-[650px] xl:w-[760px]"
            />
          </div>
        </div>
      </section>

      <section className="w-full border-y border-gray-200 bg-white">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 px-6 py-6 font-google text-sm text-gray-800 md:grid-cols-3 lg:px-12">

          <div className="flex items-center gap-3 md:justify-start">
            <span className="h-2 w-2 shrink-0 bg-blue-500"></span>
            <p>Learn by doing</p>
          </div>

          <div className="flex items-center gap-3 md:justify-center">
            <span className="h-2 w-2 shrink-0 bg-red-500"></span>
            <p>Connect across disciplines</p>
          </div>

          <div className="flex items-center gap-3 md:justify-end">
            <span className="h-2 w-2 shrink-0 bg-green-500"></span>
            <p>Build with purpose</p>
          </div>

        </div>
      </section>
    </>

  );
}
