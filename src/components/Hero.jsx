
const publicImages = `${import.meta.env.BASE_URL}images/`;

export default function Hero(){
    return(
      <>
        <section id = "homepage"  className = "w-full bg-white" >
        <div className = "mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-8 px-5 py-8 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-12 ">
            <div className = "flex min-w-0 flex-col items-start gap-4 md:gap-6">
                <img src ={`${publicImages}tulisan kecil.png`} alt ="gdgoc 26/27" className ="h-auto w-[120px] md:w-[160px]"/>
                <img src ={`${publicImages}Pasted image.png`} alt= "big ideas built together" className = "h-auto w-full max-w-[500px]"/>
                <p className = "max-w-[520px] text-base leading-relaxed text-gray-700 md:text-xl font-google ">
                A place for curious minds at{" "}
                <strong>Universitas Gadjah Mada</strong>{" "}
                to learn, connect, and build technology
                that matters.
          </p>
          <div className = "flex flex-wrap items-center gap-3 md:gap-4">
            <a href="#tracks">
                <img src = {`${publicImages}track kecil.svg`} alt= "find your track" className = "h-auto max-w-[180px] md:max-w-[220px]"/>
            </a>
            <a href="#about">
                <img src={`${publicImages}get to know us.svg`} alt ="get to know" className="h-auto max-w-[180px] md:max-w-[220px]"/>
            </a>
            </div>
           
<div className="flex items-center flex-nowrap ranslate-y-[-60px] w-4 gap-0  text-gray-700">
  {[
    "Community dot-1.svg",
    "Community dot-2.svg",
    "Community dot-3.svg",
    "Community dot.svg",
  ].map((file) => (
    <img key={file} src={`${publicImages}${file}`} alt=""  className="h-auto translate-y-[-25px] w-8 "
    />
  ))}

  <p className="pl-3  text-gray-600  whitespace-nowrap text-lg text-2xl translate-y-[-25px] font-google ">
    Different backgrounds. A shared curiosity.
  </p>
</div>
        </div>
        <div className="flex min-w-0 items-center justify-center lg:translate-y-[60px]">
          <img src={`${publicImages}Ideas coming together.png`} alt="Ideas coming together" className="h-auto w-[360px] max-w-[100%] md:w-[420px] lg:w-[500px]"
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
