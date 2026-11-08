
import { useEffect, useState } from "react";
import { BookOpen, Code2, UsersRound, Lightbulb } from "lucide-react";

const konfigurasi = {
    "study groups": {
        icon: BookOpen,
        warna: "bg-[#E8F0FE] text-[#4285F4]",
        bestFor: "Learning the fundamentals",
        urutan: 1
    },
    "hands-on workshops": {
        icon: Code2,
        warna: "bg-[#EAF5ED] text-[#4285F4]",
        bestFor: "Trying something new",
        urutan: 2
    },
    "project circles": {
        icon: UsersRound,
        warna: "bg-[#FFF7DF] text-[#4285F4]",
        bestFor: "Putting skills into practice",
        urutan: 3
    },
    "knowledge sharing": {
        icon: Lightbulb,
        warna: "bg-[#FCE8E6] text-[#4285F4]",
        bestFor: "Exchanging perspectives",
        urutan: 4
    }
};

export default function OverviewFormats() {
    const [formats, setFormats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function ambilFormats() {
            try {
                const response = await fetch("https://gdgoc-ugm-api.vercel.app/api/formats");
                if (!response.ok) throw new Error("Gagal mengambil data");

                const hasil = await response.json();
                const data = Array.isArray(hasil) ? hasil : hasil.data;

                if (!Array.isArray(data)) throw new Error("Format data tidak sesuai");

                const urut = [...data].sort((a, b) => {
                    const urutanA = konfigurasi[a.name?.toLowerCase()]?.urutan ?? 99;
                    const urutanB = konfigurasi[b.name?.toLowerCase()]?.urutan ?? 99;
                    return urutanA - urutanB;
                });

                setFormats(urut);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        ambilFormats();
    }, []);

    return (
        <section id="formats" className="w-full bg-[#F1F3F4] py-20 font-google">
            <div className="mx-auto max-w-[1200px] px-6">
                <div className="flex items-center gap-2">
                    <div className="h-[8px] w-[8px] rounded-full bg-[#4285F4]"></div>
                    <p className="text-sm font-medium text-gray-500">
                        WAYS TO LEARN
                    </p>
                </div>

                <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
                    The format changes. The curiosity
                    <br className="hidden md:block" />
                    {" "}stays.
                </h2>

                <p className="mt-5 text-lg text-gray-500">
                    Explore the kinds of experiences that help you move from understanding to doing.
                </p>

                {loading && <p className="mt-8">Loading formats...</p>}
                {error && <p className="mt-8 text-red-500">{error}</p>}

                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {formats.map((format) => {
                        const config = konfigurasi[format.name?.toLowerCase()];
                        const Icon = config?.icon;

                        return (
                            <div
                                key={format.id ?? format.name}
                                className="flex min-h-[150px] items-start gap-4 rounded-[20px] bg-white p-7"
                            >
                                <div className={`flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-xl ${config?.warna ?? "bg-gray-100 text-blue-500"}`}>
                                    {Icon && <Icon size={24} />}
                                </div>

                                <div className="flex flex-1 flex-col gap-3">
                                    <h3 className="text-2xl font-semibold text-gray-900">
                                        {format.name}
                                    </h3>

                                    <p className="text-base leading-6 text-gray-500">
                                        {format.description}
                                    </p>

                                    {config && (
                                        <p className="text-sm font-medium text-[#1967D2]">
                                            Best for - {config.bestFor}
                                        </p>

                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
