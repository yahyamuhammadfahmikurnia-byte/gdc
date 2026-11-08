import { useEffect, useState } from "react";
import Start from "../imgjourney/Starting point guidance.svg"

export default function OverviewJourney() {
    const [journey, setJourney] = useState([]);

    useEffect(() => {
        fetch("https://gdgoc-ugm-api.vercel.app/api/journey")
            .then((res) => res.json())
            .then((hasil) => setJourney(Array.isArray(hasil) ? hasil : hasil.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <section className="w-full bg-white py-20 font-google">
            <div className="mx-auto max-w-[1200px] px-6">
                <div className="flex items-center gap-2">
                    <div className="h-[8px] w-[8px] rounded-full bg-[#4285F4]"></div>
                    <p className="font-google text-sm text-gray-500">
                        PROGRESS, NOT PERFECTION
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4">
                    {journey.map((step, index) => (
                        <div key={step.id ?? index}>
                            <p className="text-5xl font-semibold text-[#1967D2]">
                                {String(index + 1).padStart(2, "0")}
                            </p>
                            <div className="my-6 border-t border-gray-300"></div>
                            <h3 className="text-2xl font-semibold">
                                {step.title}
                            </h3>
                            <p className="mt-4 text-lg text-gray-500">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="translate-y-[50px]">
                <div className="relative">
                    
                    <img src={Start} alt=""   className="scale-115 translate-y-[80px] translate-x-[80px]"
                    />
                    <div className="relative z-10 flex translate-x-[80px] translate-y-[-150px]   gap-2">
                        <div className="h-[8px] w-[8px] shrink-0 rounded-full translate-y-[6px] bg-[#4285F4]"></div>
                         <p className="font-google text-sm text-gray-500">     
                            PROGRESS, NOT PERFECTION
                        </p>
                    </div>
                    <div className="relative pt-20"> 
                    <p className="font-google text-5xl font-semibold translate-y-[-210px] translate-x-[80px]" >
                        New to tech?<br/>
                        That's a starting point,<br/>
                        too.
                    </p>
                    </div >
                    <p className="text-xl font-googel text-gray-500 translate-y-[-350px]  translate-x-[720px]">
                      You don’t need a finished portfolio or the perfect track choice. Pick a topic you’re curious<br/> about. If you’re unsure, tell us what interests you and we can start a conversation.  
                    </p>
                    <a href="" target="_blank">
                     <p className="text-xl font-googel  translate-y-[-350px] text-[#1967D2] translate-x-[720px]">
                        <br/>Talk to the community ➜
                    </p>
                    </a>
                </div>
            </div>
        </section>
    );
}