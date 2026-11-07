import juBes from "../imgbridge/Heading.svg";
import section from "../imgbridge/Section label.svg";

export default function () {
    return (
        <section id="bridge" className="w-full min-h-[400px] bg-gray-200">
            <div className="grid gap-10 translate-x-[130px] translate-y-[125px]">
                <img src={section} alt="section " className="translate-x-[-30px] t" />
                <div className="font-google font-bold text-[64px] leading-[1.15]">
                    <p>A bridge from</p>
                    <p>
                        <span className="text-[#1967D2]">“I wonder”</span> to
                    </p>
                    <p className="text-[#4285F4]">“I made this.”</p>
                </div>
            </div>
            <div className="font-google grid gap-y-8 translate-x-[670px] translate-y-[-80px]">
                <p className="text-2xl text-gray-700">Learning feels different when there's someone to exchange ideas <br />
                    with, a problem you care about, and the space to give it a try</p>
                <p className="text-xl text-gray-600">That's the spirit of Google Developer Groups on Campus at UGM. WE create room for <br /> student to explore technology, develop practical skill, and learn form one another. </p>
                <p className="text-xl text-gray-600"> Our campus is the starting point. The questions we ask and the things we build can reach <br /> beyond it.</p>
            </div>

        </section>
    )
}

