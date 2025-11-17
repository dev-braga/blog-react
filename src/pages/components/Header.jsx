import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

function Header({ onLogout, onFilterChange }) {

  const [filter, setFilter] = useState("");
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  

  const handleFilter = (value) => {
    setFilter(value);
    onFilterChange?.(value);
  }

  const handleSelect = (value) => {
    setOpen(false);
    if (onFilterChange) onFilterChange(value);
  }

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUserName(storedUser);
    }
  }, []);

  return (
    <header className="w-full bg-gray-900/80 backdrop-blur-md text-white px-6 py-2 sticky top-0 z-50 shadow-sm">
      <div className="flex justify-between items-center max-w-5xl mx-auto">


        {/* LOGO */}
        <h1 className="text-lg font-medium tracking-wide select-none opacity-90">
          Minha Aplicação
        </h1>


        {/* MOBILE BTN */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-800 transition"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={22} /> : <Menu size={22} />}
        </button>


        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-6">


          {/* DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 px-3 py-2 bg-gray-800 rounded-md transition hover:bg-gray-700 text-sm"
            >
              Filtros <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
            </button>


            {open && (
              <div className="absolute right-0 mt-2 w-44 bg-gray-800 border border-gray-700 rounded-md shadow-lg z-50 animate-slideDown">
                <ul className="py-1 text-sm">
                  <li onClick={() => handleSelect("asc")} className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Título (A → Z)</li>
                  <li onClick={() => handleSelect("desc")} className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Título (Z → A)</li>
                  <li onClick={() => handleSelect("meus")} className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Meus Posts</li>
                </ul>
              </div>
            )}
          </div>


          {/* USER */}
          <div className="flex items-center gap-3">
            <span className="text-sm opacity-80">{userName || "Usuário"}</span>


            <button
              onClick={onLogout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md transition text-sm"
            >
              Sair
            </button>
          </div>
        </div>
      </div>


      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="md:hidden bg-gray-800/60 backdrop-blur-md border-t border-gray-700 mt-2 rounded-b-lg p-4 animate-slideDown">


          {/* FILTROS MOBILE */}
          <div className="mb-4">
            <p className="text-sm opacity-70 mb-2">Filtros</p>
            <div className="flex flex-col gap-2 text-sm">
              <button onClick={() => handleSelect("asc")} className="hover:bg-gray-700 p-2 rounded text-left">Título (A → Z)</button>
              <button onClick={() => handleSelect("desc")} className="hover:bg-gray-700 p-2 rounded text-left">Título (Z → A)</button>
              <button onClick={() => handleSelect("meus")} className="hover:bg-gray-700 p-2 rounded text-left">Meus Posts</button>
            </div>
          </div>


          {/* USER / LOGOUT MOBILE */}
          <div className="flex flex-col gap-3">
            <span className="text-sm opacity-80">{userName || "Usuário"}</span>


            <button
              onClick={onLogout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md transition text-sm"
            >
              Sair
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header;