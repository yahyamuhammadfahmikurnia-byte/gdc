import { s } from "motion/react-client";

export default function () {
    return (
        <section>
            <div className="flex items-start items-center whitespace-nowrap translate-x-[80px]">
                <div className="h-[8px] w-[8px] translate-y-[50px] rounded-full bg-[#4285F4]">
                    <p className="font-google translate-x-[20px] translate-y-[-8px]">
                        Contact -Lets connect
                    </p>
                    <p className="font-google text-xl translate-y-[100px] translate-x-[20px] text-gray-500" >
                        A question, a collaboration, or an idea for the community? Tell us what’s on<br /> your mind.
                    </p>
                </div>
                <p className="font-google text-7xl font-semibold translate-y-[90px]" >
                    Good things start with <span className="text-[#1967D2]">hello.</span>
                </p>

            </div>
        </section>
    )
}