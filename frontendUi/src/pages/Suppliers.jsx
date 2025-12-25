import { useEffect, useState } from "react";
import Layout from "../components/Layout";

const API = "http://localhost:8080/suppliers";

export default function Suppliers() {
  const [list, setList] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });
  const [editing, setEditing] = useState(null);

  useEffect(() => { load(); }, []);

  const load = async () => setList(await (await fetch(API)).json());

  const submit = async (e) => {
    e.preventDefault();
    await fetch(editing ? `${API}/${editing}` : API, {
      method: editing ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({ name: "", email: "", phone: "", address: "" });
    setEditing(null);
    load();
  };

  const edit = (s) => { setEditing(s.id); setForm(s); };
  const del = async (id) => { await fetch(`${API}/${id}`, { method: "DELETE" }); load(); };

  return (
    <Layout>
      {/* Samsung-inspired Hero Header */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900/50 to-violet-900/80 text-white py-24 px-8 rounded-3xl shadow-2xl mb-16 border border-slate-700/50 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl tracking-tight">
            Suppliers
          </h1>
          <p className="text-xl md:text-2xl font-medium text-slate-300 tracking-wide leading-relaxed max-w-2xl mx-auto">
            Effortlessly manage your supplier network with precision and style
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-8">
        
        {/* Add/Edit Form Card - Samsung Style */}
        <div className="bg-gradient-to-b from-slate-50/90 to-white/70 backdrop-blur-3xl rounded-3xl shadow-2xl border border-slate-200/60 p-12 hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 group/card">
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl mx-auto mb-8 shadow-2xl flex items-center justify-center border-4 border-white/50 group-hover:scale-110 transition-all duration-500">
              <svg className="w-12 h-12 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight">
              {editing ? "Update Supplier" : "Add New Supplier"}
            </h2>
            <p className="text-lg text-slate-600 font-medium">Enter supplier details below</p>
          </div>

          <form onSubmit={submit} className="space-y-8">
            {["name", "email", "phone", "address"].map((f) => (
              <div key={f} className="group/input">
                <label className="block text-xl font-bold text-slate-800 mb-4 capitalize tracking-wide">
                  {f === 'name' ? 'Full Name' : f === 'email' ? 'Email Address' : f === 'phone' ? 'Phone Number' : 'Address'}
                </label>
                <input 
                  className="w-full h-20 px-8 text-2xl font-semibold border-2 border-slate-200 rounded-3xl bg-white/80 backdrop-blur-md shadow-xl focus:border-cyan-500 focus:ring-8 focus:ring-cyan-500/20 focus:shadow-2xl hover:border-blue-400 hover:shadow-2xl transition-all duration-400 placeholder-slate-400 group-hover/input:border-blue-300"
                  placeholder={`Enter ${f === 'name' ? 'supplier name' : f === 'email' ? 'email address' : f === 'phone' ? 'phone number' : 'full address'}`}
                  value={form[f]} 
                  onChange={e => setForm({ ...form, [f]: e.target.value })} 
                />
              </div>
            ))}
            <button 
              type="submit"
              className="w-full h-20 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-700 hover:via-blue-700 hover:to-purple-700 text-2xl font-black text-white rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-400 flex items-center justify-center gap-4 group/button border-4 border-transparent hover:border-white/30 active:scale-[0.98]"
            >
              <span className="relative z-10">
                {editing ? "🔄 UPDATE SUPPLIER" : "➕ ADD SUPPLIER"}
              </span>
              <svg className="w-8 h-8 group-hover/button:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </form>
        </div>

        {/* Suppliers List Card - Samsung Style */}
        <div className="bg-gradient-to-b from-slate-50/90 to-white/70 backdrop-blur-3xl rounded-3xl shadow-2xl border border-slate-200/60 p-12 hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 group/card overflow-hidden">
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl mx-auto mb-8 shadow-2xl flex items-center justify-center border-4 border-white/50 group-hover:scale-110 transition-all duration-500">
              <svg className="w-12 h-12 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight">
              Suppliers List
            </h2>
            <p className="text-2xl text-slate-600 font-bold">Total: <span className="text-cyan-600">{list.length}</span></p>
          </div>

          <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-slate-300/50 scrollbar-track-slate-100/50 scrollbar-thumb-rounded-full">
            {list.length === 0 ? (
              <div className="text-center py-24">
                <div className="w-32 h-32 bg-gradient-to-r from-slate-100 to-slate-200 rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-2xl border-4 border-slate-200">
                  <svg className="w-16 h-16 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-slate-800 mb-2">No Suppliers Yet</h3>
                <p className="text-xl text-slate-500 font-medium">Add your first supplier using the form above</p>
              </div>
            ) : (
              list.map(s => (
                <div key={s.id} className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-slate-200/60 hover:border-cyan-400 hover:shadow-3xl hover:-translate-y-3 transition-all duration-500 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-2">
                      <span className="text-base font-bold text-cyan-600 uppercase tracking-wider">NAME</span>
                      <p className="text-3xl font-black text-slate-900 group-hover:text-cyan-700 transition-all duration-300 leading-tight">{s.name}</p>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-bold text-blue-600 uppercase tracking-wider block mb-1">EMAIL</span>
                        <p className="text-xl font-semibold text-slate-700 break-words leading-relaxed">{s.email}</p>
                      </div>
                      <div>
                        <span className="text-sm font-bold text-purple-600 uppercase tracking-wider block mb-1">PHONE</span>
                        <p className="text-xl font-semibold text-slate-700">{s.phone}</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-t-2 border-slate-200 pt-8">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <span className="text-sm font-bold text-slate-600 uppercase tracking-wider block mb-2">ADDRESS</span>
                        <p className="text-lg text-slate-700 leading-relaxed">{s.address}</p>
                      </div>
                      <div className="flex gap-4 pt-2 sm:pt-0">
                        <button 
                          onClick={() => edit(s)}
                          className="px-8 py-5 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-xl font-black text-slate-900 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-400 flex items-center gap-3 h-16 border-4 border-transparent hover:border-white/20 group/edit"
                          title="Edit Supplier"
                        >
                          <svg className="w-6 h-6 group-hover/edit:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                          Edit
                        </button>
                        <button 
                          onClick={() => del(s.id)}
                          className="px-8 py-5 bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-xl font-black text-white rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-400 flex items-center gap-3 h-16 border-4 border-transparent hover:border-white/20 group/delete"
                          title="Delete Supplier"
                        >
                          <svg className="w-6 h-6 group-hover/delete:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar { width: 10px; height: 10px; }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: rgba(241, 245, 249, 0.5);
          border-radius: 10px;
          backdrop-filter: blur(10px);
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #e2e8f0, #cbd5e1);
          border-radius: 10px;
          border: 2px solid transparent;
          background-clip: content-box;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #94a3b8, #64748b);
        }
      `}</style> */}
    </Layout>
  );
}
