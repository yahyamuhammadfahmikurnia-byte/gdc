
import { useEffect, useState } from "react";

const API_URL = "https://gdgoc-ugm-api.vercel.app/api/inquiry-categories";
const inputClass = "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500";

export default function ContactCategories() {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function ambilCategories() {
      try {
        const response = await fetch(API_URL, {
          signal: controller.signal
        });
        if (!response.ok) {
          throw new Error("tidak dapat mengambil");
        }

        const hasil = await response.json();
        const data = Array.isArray(hasil.data) ? hasil.data : [];

        setCategories(data);
        setSelected(data[0]?.id ?? "");
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

    ambilCategories();
    return () => controller.abort();
  }, []);

  const kategoriAktif = categories.find((item) => item.id === selected);

  function handleSubmit(e) {
    e.preventDefault();
    setFeedback("layanan belum tersedia.");
  }

  return (
    <section className="w-full bg-white py-16 font-google ">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 lg:grid-cols-[0.9fr_1.4fr]">
        <div>
          <h2 className="text-2xl font-semibold">
            What brings you here?
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Pick the closest topic in the form. We'll take it from there.
          </p>

          <div className="mt-6 flex flex-col gap-4">
            {loading && <p>Loading categories...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setSelected(category.id)}
                className={`flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition-colors ${
                  selected === category.id
                    ? "border-[#DCE8FF] bg-[#E8F0FE]"
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
              >
                <span className="w-6 shrink-0 text-center text-2xl font-medium text-[#4285F4]">
                  {category.icon}
                </span>

                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {category.label}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {category.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-[#FFF7DF] p-7">
            <div className="flex items-center gap-2">
              <span className="h-[8px] w-[8px] rounded-full bg-[#4285F4]"></span>
              <p className="text-xs text-gray-500">
                STAY CURIOUS, STAY CONNECTED
              </p>
            </div>

            <h3 className="mt-4 text-2xl font-semibold">
              Looking for community updates?
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Follow @gdgoc.ugm for learning opportunities and what's happening in the community.
            </p>
            <a href="https://www.instagram.com/gdgoc.ugm?utm_source=ig_web_button_share_sheet&dlrf=ZDNlZDc0MzIxNw==" target="_blank">
            <p className="mt-4 text-sm font-medium text-[#1967D2]">
              Find @gdgoc.ugm →
            </p>
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[24px] bg-[#F1F3F4] p-7 md:p-9"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              Send us a message
            </h2>
            <span className="text-2xl text-[#4285F4]">↗</span>
          </div>

          <p className="mt-3 text-xs text-gray-500">
            Fields marked * are required.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm">
              First name *
              <input
                type="text"
                name="firstName"
                placeholder="Your first name"
                required
                className={inputClass}
              />
            </label>

            <label className="flex flex-col gap-2 text-sm">
              Last name
              <input
                type="text"
                name="lastName"
                placeholder="Your last name"
                className={inputClass}
              />
            </label>
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <label htmlFor="email" className="text-sm">
              Email address *
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Where we can reply to you"
              required
              className={inputClass}
            />
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <label htmlFor="organization" className="text-sm">
              University / organization
            </label>
            <input
              id="organization"
              type="text"
              name="organization"
              placeholder="Where you study or work (optional)"
              className={inputClass}
            />
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <label htmlFor="category" className="text-sm">
              Inquiry category *
            </label>

            <select
              id="category"
              name="category"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              required
              className={inputClass}
            >
              <option value="" disabled>
                Select a category
              </option>

              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.label}
                </option>
              ))}
            </select>

            {kategoriAktif && (
              <p className="text-xs text-gray-500">
                {kategoriAktif.guidance}
              </p>
            )}
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <label htmlFor="subject" className="text-sm">
              Subject *
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="A short introduction to your question"
              required
              className={inputClass}
            />
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <label htmlFor="message" className="text-sm">
              Your message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us a little about your question or idea..."
              required
              className={inputClass}
            ></textarea>
          </div>

          <label className="mt-5 flex items-start gap-3 text-xs text-gray-500">
            <input type="checkbox" required className="mt-0.5" />
            I agree that the information I share can be used to respond to this inquiry.
          </label>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-5">
            <button
              type="submit"
              disabled={loading || categories.length === 0}
              className="rounded-lg bg-[#4285F4] px-6 py-3 text-sm font-medium text-white hover:bg-[#1967D2] disabled:opacity-50"
            >
              Send message →
            </button>

            <p className="max-w-[200px] text-xs text-gray-500">
              Please don't include passwords or sensitive personal information.
            </p>
          </div>

          {feedback && (
            <p role="status" className="mt-4 text-sm text-amber-700">
              {feedback}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
