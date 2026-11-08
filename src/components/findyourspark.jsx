import label from "../imgfindspark/Section label(10).svg"
import blueicon from "../imgfindspark/Research glass artwork.svg"

export default function Findyourspark() {
  return (
    <section>
     <div className="absolute-x-[40px] translate-y-[80px] flex flex-col items-start gap-y-8 pl-[80px]" >
      <img src={label} alt= "label" className=""/>
      <p className="text-8xl font-google font-semibold ">
        Find your spark.
     <br/>
     <span className="text-[#1967D2]">
        Build your own path.
        </span>
      </p>
      <p className="font-google text-xl text-gray-500 ">
        Explore how research, creativity, and development connect. Start with one interest. Grow through<br/> practice and the people around you.
      </p>
     </div>
     <div className="flex flex-col items-end translate-x-[-70px] translate-y-[-250px]">
        <img src ={blueicon} alt =""/>
     </div>
    <div className="w-full h-[2px] bg-gray-300 translate-y-[-200px] my-10"></div>
    <div className="w-full h-[2px] bg-gray-300 translate-y-[-320px]  my-10">
      <div className="text-center gap-20 flex items-center justify-evenly">
      <p className="font-google text-xl translate-y-[26px] text-[#1967D2]" >Learning tracks↓</p>
      <p className="font-google text-xl translate-y-[26px] " >Learning format <span className="text-[#1967D2]">
         ↓
         </span></p>
       <p className="font-google text-xl translate-y-[26px] " >Your learning journey pan <span className="text-[#1967D2]">
         ↓
         </span>
         </p>
        <p className="font-google text-xl translate-y-[26px] " >Find a starting point <span className="text-[#1967D2]">
         ↓
         </span>
         </p>
        </div>
    </div>

 
    </section>
  );
}