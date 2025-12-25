// Table.jsx - Fixed (No custom scrollbar classes)
export default function Table({ columns, data }) {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-slate-50/90 to-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200/60 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {columns.map((col, idx) => (
            <div key={col} className="text-center pb-4 border-b-2 border-slate-200/50">
              <div className="text-sm font-bold uppercase tracking-wider text-slate-600">{col}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {data.length === 0 ? (
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 text-center border-2 border-slate-200/60 shadow-xl">
            <svg className="w-16 h-16 text-slate-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <h3 className="text-2xl font-black text-slate-800 mb-2">No Data Available</h3>
            <p className="text-lg text-slate-500">Add some records to see them here</p>
          </div>
        ) : (
          data.map((row, rowIdx) => (
            <div key={rowIdx} className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-3xl hover:-translate-y-2 hover:border-cyan-400 transition-all duration-500 border-2 border-slate-200/60 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                {columns.map((col, colIdx) => (
                  <div key={col} className="text-center group-hover:text-cyan-700 transition-colors">
                    <div className="text-2xl font-bold text-slate-900 mb-1">{row[col] || '-'}</div>
                    <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">{col}</div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
