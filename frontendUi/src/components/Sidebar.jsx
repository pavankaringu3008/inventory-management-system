// Sidebar.jsx - Samsung One UI Style
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menu = [
    { name: "Customers", path: "/customers", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
    { name: "Suppliers", path: "/suppliers", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
    { name: "Products", path: "/products", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
    { name: "Warehouses", path: "/warehouses", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
    { name: "Orders", path: "/orders", icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
  ];

  return (
    <aside className="w-72 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900/80 backdrop-blur-2xl shadow-2xl border-r border-slate-700/50 min-h-screen p-8 flex flex-col">
      
      {/* Logo Section */}
      <div className="text-center mb-12 pb-8 border-b border-slate-700/50">
        <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 rounded-3xl mx-auto mb-6 shadow-2xl flex items-center justify-center border-4 border-white/20 hover:scale-110 transition-all duration-500 group/logo">
          <svg className="w-10 h-10 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
        <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent tracking-tight drop-shadow-lg">
          Inventory
        </h2>
        <p className="text-sm text-slate-400 font-medium tracking-wider">Pro Dashboard</p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {menu.map((m) => (
            <li key={m.name}>
              <NavLink
                to={m.path}
                className={({ isActive }) =>
                  `group flex items-center gap-4 p-5 rounded-3xl transition-all duration-500 shadow-xl border-2 border-transparent ${
                    isActive 
                      ? "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white shadow-2xl hover:shadow-3xl hover:-translate-y-1 hover:scale-[1.02] border-white/30" 
                      : "bg-white/10 hover:bg-white/20 hover:shadow-2xl hover:-translate-y-1 hover:border-white/20 text-slate-200 hover:text-white"
                  }`
                }
              >
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={m.icon} />
                  </svg>
                </div>
                <span className="text-lg font-bold tracking-wide flex-1">{m.name}</span>
                <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer Section */}
      <div className="mt-12 pt-8 border-t border-slate-700/50">
        <div className="flex items-center gap-4 p-5 bg-white/5 backdrop-blur-sm rounded-3xl hover:bg-white/10 transition-all duration-300 cursor-pointer group/footer">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-xl group-hover/footer:scale-110 transition-all duration-300">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <div className="font-bold text-white text-lg">Admin</div>
            <div className="text-sm text-slate-400">Sign out</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
