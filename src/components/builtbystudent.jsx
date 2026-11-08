import judulBesar from "../imgbbs/Page title.svg";
import labelJudul from "../imgbbs/Section label.svg";
import communityMark from "../imgbbs/Community mark artwork.svg";

export default function () {
    return (
        <section id="homepage" className="w-full bg-white" >
            <div className=" w-[1200px] grid gap-y-10 translate-y-[110px] translate-x-[100px]">
                <img src={labelJudul} alt="labelJudul" />
                <div className="self-stretch font-google justify-start"><span class="text-neutral-800 text-7xl font-bold  leading-[77.76px]">Built by students.<br /></span><span class="text-blue-500 text-7xl font-bold font-google leading-[77.76px]">For what’s next.</span></div>
                <p class="text-2xl font-google text-gray-600">
                    We're a community of learners and makers at Universitas Gadjah Mada, <br /> connected by curiosity and the belief that technology can do good.
                </p>
                <p class="text-xs font-google text-gray-600">
                    UNIVERSITAS GADJAH MADA • 2026/2027
                </p>
            </div>
            <div class="translate-x-[1200px] scale-135 -translate-y-[250px]">
                <img src={communityMark} alt="communitymark" className=" scale-90 " />
            </div>
        </section>
    )
}