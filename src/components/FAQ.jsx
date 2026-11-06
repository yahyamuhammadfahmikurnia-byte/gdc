
import { useEffect, useState } from "react";
import sectionLabel from "../../Tracksimg/Section label(8).svg";
import invitationPanel from "../faqimg/Invitation panel.svg";
import action from "../faqimg/Action.svg";
import textLink from "../faqimg/Text link.svg";

const API_URL = "https://gdgoc-ugm-api.vercel.app/api/faqs";

export default function FAQ() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(0);
  const [terbuka, setTerbuka] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    async function ambilFAQ() {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(API_URL, {
          signal: controller.signal
        });
        if (!response.ok) {
          throw new Error("Gagal mengambil data FAQ");
        }
        const hasil = await response.json();
        const data = Array.isArray(hasil) ? hasil : hasil.data;
        if (!Array.isArray(data)) {
          throw new Error("Format data FAQ tidak sesuai");
        }
        const tigaFAQ = data.slice(0, 3);
        setFaqs(tigaFAQ);
        setTerbuka(tigaFAQ.map((faq) => faq.id));
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
    ambilFAQ();
    return () => controller.abort();
  }, [retry]);
  function toggleFAQ(id) {
    setTerbuka((sebelumnya) =>
      sebelumnya.includes(id)
        ? sebelumnya.filter((item) => item !== id)
        : [...sebelumnya, id]
    );
  }
  return (
    <>
    <section id="faq" className="w-full bg-white px-6 py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1272px] grid-cols-1 items-start gap-12 lg:grid-cols-[390px_minmax(0,1fr)] lg:gap-24">
        <div className="flex flex-col items-start">
          <img
            src={sectionLabel}
            alt="A few good questions"
            className="mb-5 h-auto w-[164px]"  />
          <h2 className="font-google text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Wondering
            <br />
            where
            <br />
            to begin?
          </h2>
          <a   href="/contact" className="mt-6 font-google text-base font-medium text-blue-600 hover:underline" > Ask us a question <span className="ml-3">→</span>
          </a>
        </div>
        <div className="w-full min-w-0 font-google">
          {loading && (
            <p className="text-gray-500">Loading FAQ...</p>
          )}
          {!loading && error && (
            <div>
              <p className="text-red-600">{error}</p>
              <button
                type="button"
                onClick={() => setRetry((n) => n + 1)}
                className="mt-4 rounded-lg bg-blue-600 px-5 py-2 text-white"
              >
                Coba Lagi
              </button>
            </div>
          )}
          {!loading && !error && faqs.length === 0 && (
            <p className="text-gray-500">
              Belum ada pertanyaan tersedia.
            </p>
          )}
          {!loading && !error && faqs.map((faq, index) => (
            <div
              key={faq.id ?? index}
              className="border-b border-gray-200 py-5 first:pt-0"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(faq.id)}
                aria-expanded={terbuka.includes(faq.id)}
                className="flex w-full items-center justify-between gap-6 text-left"
              >
                <span className="font-google text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 shrink-0 text-blue-600 transition-transform duration-200 ${terbuka.includes(faq.id) ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m6 9 6 6 6-6"
                  />
                </svg>
              </button>
              {terbuka.includes(faq.id) && (
                <p className="mt-3 whitespace-pre-line font-google text-base leading-relaxed text-gray-500">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    <section>
        <img src={invitationPanel} className="translate-x-[125px]"/>
        <div className="translate-x-[1050px] translate-y-[-190px] grid gap-y-5">
            <a href ="" target="_blank"><img src={action}/></a>
           <a href ="" target="_blank"><img src={textLink} className="translate-x-[20px] translate-y-[-00px]"/></a> 
        </div>
    </section>
    </>
  );
}
