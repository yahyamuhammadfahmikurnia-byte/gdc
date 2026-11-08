import { useEffect, useState } from "react";
import trackResearch from "../imgTrack/Track illustration(3).svg";
import trackDesign from "../imgTrack/Track illustration(6).svg";
import trackDevelopment from "../imgTrack/Track illustration(4).svg";
import sectionLabel from "../imgTrack/Section label(4).svg";
import sectionHeading from "../imgTrack/Heading(1).svg";

const gambarTrack = {
  "research-discovery": trackResearch,
  "design-creativity": trackDesign,
  "development": trackDevelopment,
};
const labelTrack = {
  "research-discovery": "EXPLORE THE WHY",
  "design-creativity": "MAKE IT MEANINGFUL",
  "development": "BRING IDEAS TO LIFE",
};
export default function Tracks() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    async function ambilData() {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          "https://gdgoc-ugm-api.vercel.app/api/tracks",
          { signal: controller.signal }
        );
        if (!response.ok) {
          throw new Error("Gagal mengambil data API");
        }
        const hasil = await response.json();
        if (!hasil.success || !Array.isArray(hasil.data)) {
          throw new Error("Format data API tidak sesuai");
        }
        setTracks(hasil.data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }
    ambilData();
    return () => controller.abort();
  }, [retry]);
  return (
    <section className="w-full translate-y-[-190px] pb-16">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="flex flex-col items-start gap-6">
          <div className="size- inline-flex justify-start items-center gap-2.5 overflow-hidden">
            <div className="size-1.5 bg-blue-500 rounded-full" />
            <div className="justify-start text-gray-600 text-l
   font-medium font-Google uppercase">Explore your interests</div>
          </div>
          <p className="text-7xl font-google font-semibold whitespace-nowrap">Three ways in. Plenty of ways<br />forward.</p>
          <p className="font-google text-xl text-gray-500">
            These pathways are starting points, not boxes. Follow one deeply or bring different skills together.
          </p>
        </div>
        {loading && (
          <p className="mt-10 text-center text-gray-500">
            Loading tracks...
          </p>
        )}
        {!loading && error && (
          <div className="mt-10 text-center">
            <p className="text-red-500">{error}</p>
            <button
              onClick={() => setRetry((n) => n + 1)}
              className="mt-4 rounded-lg bg-blue-500 px-5 py-2 text-white"
            >
              Coba Lagi
            </button>
          </div>
        )}
        {!loading && !error && tracks.length === 0 && (
          <p className="mt-10 text-center text-gray-500">
            Belum ada track tersedia.
          </p>
        )}
        {!loading && !error && tracks.length > 0 && (
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {tracks.map((track) => (
              <article
                key={track.id}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white"
              >
                <div className="relative z-20 h-[240px] w-full">
                  <img
                    src={gambarTrack[track.id]}
                    alt={track.name}
                    className="absolute left-0 top-0 h-auto w-full"
                  />
                </div>
                <div className="flex flex-1 flex-col px-8 pb-8 pt-8">
                  <p className="font-google text-xs font-medium text-blue-600">
                    {labelTrack[track.id]}
                  </p>
                  <h3 className="mt-6 font-poppins text-2xl font-bold text-gray-900">
                    {track.name?.toLowerCase().replace(/^./, (c) => c.toUpperCase())}
                  </h3>
                  <p className="mt-6 font-google text-base leading-relaxed text-gray-500">
                    {track.description}
                  </p>
                  <div className="mt-auto pt-5">
                    <hr className="mb-5 border-gray-200" />
                    <p className="font-google text-sm text-gray-500">
                      {track.skills?.slice(0, 3).join(" · ")}
                    </p>
                    <a
                      href={track.explore_link || " /overview"}
                      className="mt-5 inline-block font-google font-medium text-blue-600"
                    >
                      Explore this track →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
