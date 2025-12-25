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

          {/* Right Section - Stats & Actions */}
          <div className="flex items-center gap-6">
            
            {/* Quick Stats */}
            <div className="hidden md:flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-black text-cyan-400">24</div>
                <div className="text-xs text-slate-300 uppercase tracking-wider font-semibold">Orders</div>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-black text-emerald-400">156</div>
                <div className="text-xs text-slate-300 uppercase tracking-wider font-semibold">Products</div>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-black text-purple-400">12</div>
                <div className="text-xs text-slate-300 uppercase tracking-wider font-semibold">Customers</div>
              </div>
            </div>

            {/* User Profile / Actions */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-xl flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer border-2 border-white/30">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="hidden md:block text-right">
                <div className="text-sm font-bold text-white drop-shadow-lg">Admin User</div>
                <div className="text-xs text-slate-400">Super Admin</div>
              </div>
            </div>

            {/* Theme Toggle / Menu Button */}
            <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl shadow-xl hover:bg-white/30 hover:shadow-2xl transform hover:scale-110 hover:-translate-y-0.5 transition-all duration-300 border border-white/30 flex items-center justify-center group">
              <svg className="w-6 h-6 text-white group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
