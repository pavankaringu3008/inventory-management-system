// Header.jsx - Samsung One UI Style
export default function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-slate-700/50 sticky top-0 z-50 supports-[backdrop-filter:blur(20px)]:bg-slate-900/80">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo/Brand Section */}
          <div className="flex items-center gap-4 group/logo">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 rounded-2xl shadow-2xl flex items-center justify-center group-hover/logo:scale-110 group-hover/logo:rotate-3 transition-all duration-500 border-4 border-white/20">
              <svg className="w-7 h-7 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent tracking-tight drop-shadow-lg">
                Inventory Pro
              </h1>
              <p className="text-sm text-slate-400 font-medium tracking-wider">Management System</p>
            </div>
          </div>

          {/* Add Item Button */}
          <button className="h-14 px-10 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-xl font-black text-white rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-400 flex items-center gap-3 border-4 border-transparent hover:border-white/30 active:scale-[0.98] group">
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add Item
          </button>
        </div>
      </div>
    </header>
  );
}
