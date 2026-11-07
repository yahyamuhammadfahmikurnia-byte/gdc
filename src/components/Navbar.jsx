import { useEffect, useState } from "react";

  const publicImages = `${import.meta.env.BASE_URL}images/`;

  export default function Navbar() {
    const [bukaMenu, setbukaMenu] = useState(false);
    const [menus, setMenus] = useState([]);

useEffect(() => {
  async function ambilMenu() {
    try {
      const response = await fetch("https://gdgoc-ugm-api.vercel.app/api/navigation");
      if (!response.ok) {
        throw new Error("Gagal mengambil navigasi");
      }
      const hasil = await response.json();
      console.log(hasil);
      setMenus(hasil.data);
    } catch (error) {
      console.error(error);
    }
  }
  ambilMenu();
}, []);

    return (
      <header className="sticky top-0 z-50 w-full border-b-2 border-gray-300 bg-white">
        <nav className="flex h-24 items-center justify-between px-5 lg:h-32 lg:px-10 font-google">
          <a href="#home" className="flex shrink-0 items-center gap-3">
            <img
              src={`${publicImages}logogdgoc.png`}
              alt="Logo GDGoC"
              className="h-auto w-[69px]"
            />
            <p className="hidden text-xl text-gray-700 sm:block font-google ">
              Google Developer Groups
            </p>
          </a>
                <div className="hidden items-center gap-12 text-2xl text-gray-700 lg:flex">
            {menus.map((menu) => (
              <a
                key={menu.name}
                href={menu.href}
                className="transition-colors hover:text-blue-600"
              >
                {menu.label}
              </a>
            ))}
          </div>
          <a href="#tracks" className="hidden shrink-0 lg:block">
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
      <a
        key={menu.label}
        href={menu.href}
        onClick={() => setbukaMenu(false)}
        className="text-lg text-gray-700"
      >
        {menu.label}
      </a>
    ))}
            <a
              href="#tracks" onClick={() => setbukaMenu(false)} className="font-semibold text-blue-600 font-google "
            >
              Find your track →
            </a>
          </div>
        )}
      </header>
    );
  }
