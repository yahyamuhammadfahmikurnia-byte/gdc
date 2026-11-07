
import { useEffect, useState } from "react";
import  caption from "../imgpnl/Section label.svg";
import juBes from "../imgpnl/Heading.svg";
import panel from "../imgpnl/Community commitment.svg";
import star from "../imgpnl/Commitment spark.svg";

export default function PeopleNotLabels() {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    async function ambilRoles() {
      setLoading(true);
      setError("");
      try {
        const response = await fetch("https://gdgoc-ugm-api.vercel.app/api/roles", {
          signal: controller.signal
        });
        if (!response.ok) {
          throw new Error("Gagal mengambil data");
        }
        const hasil = await response.json();
        if (!Array.isArray(hasil.data)) {
          throw new Error("Format data tidak sesuai");
        }
        setRoles(hasil.data);
      } catch (err) {
        if (!controller.signal.aborted) {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }
    ambilRoles();
    return () => controller.abort();
  }, [retry]);

  return (
    <section id="peoplenotlabels" className="w-full bg-white px-6 py-20 lg:px-12 lg:py-24 lg:pt-4 trasnlate-y-[-100px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 lg:grid-cols-[370px_minmax(0,1fr)] lg:gap-20">
        <div className="flex flex-col items-start translate-x-[-70px] grid gap-y-6">
          <img src ={caption} alt = "section"/>
                          <p className="text-5xl font-google font-semibold whitespace-nowrap">There's more<br/>than one way to<br/> contribute.</p>
          <p className="mt-7 max-w-[350px] font-google text-base leading-7 text-gray-500">
            You can be learning one day and helping someone else the next. A community grows through both.
          </p>
        </div>
        <div className="w-full min-w-0">
          {loading && (
            <p className="font-google text-gray-500">Loading...</p>
          )}
          {!loading && error && (
            <div>
              <p className="font-google text-red-500">{error}</p>
              <button
                type="button"
                onClick={() => setRetry((n) => n + 1)}
                className="mt-4 rounded-lg bg-blue-600 px-5 py-2 font-google text-white"
              >
                Coba Lagi
              </button>
            </div>
          )}
          {!loading && !error && roles.length === 0 && (
            <p className="font-google text-gray-500">Belum ada data.</p>
          )}
          {!loading && !error && roles.length > 0 && (
            <div className="flex flex-col">
              {roles.map((role) => (
                <div key={role.id} className="border-b border-gray-200 py-6 first:pt-0">
                  <h3 className="font-google text-2xl font-bold text-gray-900">
                    {role.title}
                  </h3>
                  <p className="mt-3 font-google text-base leading-7 text-gray-500">
                    {role.description}
                  </p>
                </div>
              ))}
              <a
                href="/contact"
                className="mt-7 inline-flex w-fit items-center gap-4 font-google text-base font-medium text-blue-600 hover:underline"
              >
                Let’s talk about getting involved
                <span aria-hidden="true">→</span>
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="relative left-1/2 w-screen -translate-x-1/2 grid gap-y-2 translate-y-[80px] bg-[#FFF7DF] pl-[180px] pr-12 py-20 text-left [&>p]:text-left">
               <img src={star} alt="Star" className="absolute left-[240px] top-1/2 -translate-y-1/2 w-[60px]"/>
               <p className="text-5xl font-google translate-x-[230px] font-semibold whitespace-nowrap">A space to learn. A responsibility to care</p>
               <p className="font-google  text-gray-500 text-lg translate-x-[230px]">We want every conversation and learning experience to be respectful, inclusive, and constructive. Be kind, give credit, and make room<br/> for people who are just getting started.</p> 
            
            </div>
    </section>
  );
}
