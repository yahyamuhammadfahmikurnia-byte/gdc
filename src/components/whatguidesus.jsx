
import { useEffect, useState } from "react";
import juBes from "../imgwhatguidesus/Heading(4).svg"
import section from "../imgwhatguidesus/Section label(9).svg"
import { BookOpen, UsersRound, Code2, Heart } from "lucide-react";

export default function WhatGuidesUs() {
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function ambilData() {
      try {
        const response = await fetch("https://gdgoc-ugm-api.vercel.app/api/values");
        if (!response.ok) {
          throw new Error("Gagal mengambil data");
        }
        const hasil = await response.json();
        setValues(Array.isArray(hasil) ? hasil : hasil.data ?? []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    ambilData();
  }, []);
  const cardIcons = {
    "Stay curious": {
      icon: BookOpen,
      className: "w-6 h-6 text-blue-500 "
    },
    "Make room": {
      icon: UsersRound,
      className: "w-7 h-7 text-red-500"
    },
    "Learn by building": {
      icon: Code2,
      className: "w-8 h-8 text-yellow-500"
    },
    "Give something back": {
      icon: Heart,
      className: "w-6 h-6 text-green-500"
    }
  };
  return (
    <section id="whatguidesus" className="w-full bg-white px-20 py-30">
      <img src={section} alt="section" class="translate-y-[-70px]" />
      <p className="text-6xl translate-y-[-20px] font-google font-semibold whitespace-nowrap">Good technology starts with good <br />company.</p>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && values.length === 0 && <p>Belum ada data.</p>}
      {!loading && !error && (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const config = cardIcons[value.title];
            const Icon = config?.icon;
            return (
              <div key={value.id} className="rounded-2xl border border-gray-200 p-6">
                {Icon && (
                  <a
                    href=" " target="_blank"
                    className="cursor-pointer transition-transform hover:scale-110"
                  >
                    <Icon className="h-6 w-6 text-blue-500" />
                  </a>
                )}
                <h3 className="font-google text-xl font-bold">{value.title}</h3>
                <p className="mt-4 font-google text-gray-500">{value.description}</p>
              </div>
            );
          })}

        </div>
      )}
    </section>
  );
}
