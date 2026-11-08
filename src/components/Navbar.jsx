
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";

const publicImages = `${import.meta.env.BASE_URL}images/`;

const menuCadangan = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Overview", href: "/overview" },
  { label: "Contact", href: "/contact" }
];

export default function Navbar() {
  const [bukaMenu, setbukaMenu] = useState(false);
  const [menus, setMenus] = useState(menuCadangan);

  useEffect(() => {
    async function ambilMenu() {
      try {
        const response = await fetch("https://gdgoc-ugm-api.vercel.app/api/navigation");

        if (!response.ok) {
          throw new Error("Gagal mengambil navigasi");
        }

        const hasil = await response.json();
        const data = Array.isArray(hasil) ? hasil : hasil.data;

        if (Array.isArray(data) && data.length > 0) {
          setMenus(data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    ambilMenu();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-gray-300 bg-white">
      <nav className="flex h-24 items-center justify-between px-5 lg:h-32 lg:px-10 font-google">
        <NavLink to="/" className="flex shrink-0 items-center gap-3">
          <img
            src={`${publicImages}logogdgoc.png`}
            alt="Logo GDGoC"
            className="h-auto w-[69px]"
          />

          <div className="hidden sm:flex flex-col font-google">
            <p className="text-base text-gray-700 whitespace-nowrap">
              Google Developer Groups
            </p>
            <p className="text-xs whitespace-nowrap">
              <span className="text-[#1967D2]">On campus</span>
              {" "}• Universitas Gadjah Mada
            </p>
          </div>
        </NavLink>

        <div className="hidden items-center gap-10 text-base font-google lg:flex">
          {menus.map((menu) => (
            <NavLink
              key={menu.href}
              to={menu.href}
              className={({ isActive }) =>
                `relative isolate rounded-full px-3 py-2 transition-colors duration-300 ${
                  isActive
                    ? "text-[#1967D2] font-bold"
                    : "text-gray-600 hover:text-[#1967D2]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-[#E8F0FE]"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30
                      }}
                    />
                  )}
                  <span className="relative z-10">
                    {menu.label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        <a href="/#tracks" className="hidden shrink-0 lg:block">
          <img
            src={`${publicImages}find your track.svg`}
            alt="Find your track"
            className="h-auto w-[197px]"
          />
        </a>

        <button
          type="button"
          onClick={() => setbukaMenu(!bukaMenu)}
          className="rounded-lg border border-gray-300 px-4 py-2 text-2xl lg:hidden"
          aria-label="Buka menu"
          aria-expanded={bukaMenu}
        >
          ☰
        </button>
      </nav>

      {bukaMenu && (
        <div className="flex flex-col gap-4 border-t border-gray-200 bg-white px-6 py-5 lg:hidden">
          {menus.map((menu) => (
            <NavLink
              key={menu.href}
              to={menu.href}
              onClick={() => setbukaMenu(false)}
              className={({ isActive }) =>
                `text-lg ${
                  isActive
                    ? "font-bold text-[#1967D2]"
                    : "text-gray-700"
                }`
              }
            >
              {menu.label}
            </NavLink>
          ))}

          <a
            href="/#tracks"
            onClick={() => setbukaMenu(false)}
            className="font-semibold text-blue-600 font-google"
          >
            Find your track →
          </a>
        </div>
      )}
    </header>
  );
}
