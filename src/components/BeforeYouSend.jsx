
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const panduan = [
  { id: "joining-learning", title: "For learning questions" },
  { id: "collaboration", title: "For collaborations" },
  { id: "general-inquiry", title: "Not sure which category fits?" }
];

export default function BeforeYouSend() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function ambilGuide() {
      try {
        const response = await fetch("https://gdgoc-ugm-api.vercel.app/api/inquiry-categories");
        if (!response.ok) throw new Error("Gagal mengambil data guide");

        const hasil = await response.json();
        const data = Array.isArray(hasil) ? hasil : hasil.data;

        if (!Array.isArray(data)) {
          throw new Error("Format data tidak sesuai");
        }

        setCategories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    ambilGuide();
  }, []);

  return (
    <section className="w-full border-t border-gray-200 bg-white py-16 font-google">
      <div className="mx-auto grid max-w-[1200px] translate-y-[60px] grid-cols-1 gap-12 px-6 lg:grid-cols-[360px_1fr] lg:gap-20">
        <div className="translate-x-[-40px] scale-140">
          <div className="flex items-center gap-2">
            <div className="h-[8px] w-[8px] scale-70 rounded-full bg-[#4285F4]"></div>
            <p className="text-[8px] translate-y-[1px] font-medium text-gray-500">
              A LITTLE GUIDANCE
            </p>
          </div>

          <h2 className="mt-5 text-4xl font-semibold leading-tight">
            Help us understand
            <br />
            your idea.
          </h2>

          <Link
            to="/overview"
            className="mt-5 inline-flex items-center gap-3 text-base font-medium text-[#1967D2]"
          >
            Explore the programs first
            <span className="text-2xl">→</span>
          </Link>
        </div>

        <div className="flex flex-col translate-x-[100px] translate-y-[-50px]">
          {loading && <p>Loading guide...</p>}
          {error && <p className="text-red-500">{error}</p>}

          {panduan.map((item) => {
            const category = categories.find((c) => c.id === item.id);
            if (!category) return null;

            return (
              <div
                key={item.id}
                className="border-b border-gray-300 py-5 first:pt-0"
              >
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {category.guidance}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
