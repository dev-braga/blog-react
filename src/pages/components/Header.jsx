import { useEffect, useState } from "react";

function Header({onLogout, onFilterChange}){

    const [filter, setFilter] = useState("");
    const [open, setOpen] = useState(false);
    const [userName, setUserName] = useState("");

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
        if(storedUser){
            setUserName(storedUser);
        }
    }, []);

    return(
        <header className="w-full bg-gray-900 text-white shadow-lg px-6 py-1">
      <div className="flex justify-between items-center max-w-5xl mx-auto">

        <h1 className="text-xl font-semibold tracking-wide">Minha Aplicação</h1>

        {/* DROPDOWN */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="px-4 py-2 bg-gray-800 rounded-md border border-gray-700 hover:bg-gray-700 transition"
          >
            Filtros ▾
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-md shadow-lg z-50">
              <ul className="py-1 text-sm">
                <li
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                  onClick={() => handleSelect("asc")}
                >
                  Título (A → Z)
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                  onClick={() => handleSelect("desc")}
                >
                  Título (Z → A)
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                  onClick={() => handleSelect("meus")}
                >
                  Meus Posts
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* USER AND LOGOUT */}
        <div className="flex items-center gap-4">
          <span className="text-sm opacity-80">{userName || "Usuário"}</span>

          <button
            onClick={onLogout}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md transition"
          >
            Sair
          </button>
        </div>
      </div>
    </header>
    )
}

export default Header;