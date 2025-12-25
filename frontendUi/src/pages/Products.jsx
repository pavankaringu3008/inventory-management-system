// Products.jsx - Samsung Style
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

const API = "http://localhost:8080/products";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", details: "" });
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setProducts(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(editing ? `${API}/${editing}` : API, {
      method: editing ? "PUT" : "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    setEditing(null);
    setForm({ name: "", details: "" });
    getProducts();
  };

  const deleteProduct = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    getProducts();
  };

  const startEdit = (prod) => {
    setEditing(prod.id);
    setForm({ name: prod.name, details: prod.details });
  };

  const resetForm = () => {
    setEditing(null);
    setForm({ name: "", details: "" });
  };

  return (
    <Layout>
      {/* Samsung-inspired Hero Header */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900/50 to-violet-900/80 text-white py-24 px-8 rounded-3xl shadow-2xl mb-16 border border-slate-700/50 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl tracking-tight">
            Products
          </h1>
          <p className="text-xl md:text-2xl font-medium text-slate-300 tracking-wide leading-relaxed max-w-2xl mx-auto">
            Manage your product catalog with precision and style
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-8">
        
        {/* Add/Edit Product Form Card */}
        <div className="bg-gradient-to-b from-slate-50/90 to-white/70 backdrop-blur-3xl rounded-3xl shadow-2xl border border-slate-200/60 p-12 hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 group/card">
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl mx-auto mb-8 shadow-2xl flex items-center justify-center border-4 border-white/50 group-hover:scale-110 transition-all duration-500">
              <svg className="w-12 h-12 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight">
              {editing ? "Update Product" : "Add New Product"}
            </h2>
            <p className="text-lg text-slate-600 font-medium">Product details</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="group/input">
              <label className="block text-xl font-bold text-slate-800 mb-4 tracking-wide">Product Name</label>
              <input 
                className="w-full h-20 px-8 text-2xl font-semibold border-2 border-slate-200 rounded-3xl bg-white/80 backdrop-blur-md shadow-xl focus:border-cyan-500 focus:ring-8 focus:ring-cyan-500/20 focus:shadow-2xl hover:border-blue-400 hover:shadow-2xl transition-all duration-400 placeholder-slate-400 group-hover/input:border-blue-300"
                placeholder="Enter product name"
                value={form.name} 
                onChange={(e) => setForm({ ...form, name: e.target.value })} 
              />
            </div>

            <div className="group/input">
              <label className="block text-xl font-bold text-slate-800 mb-4 tracking-wide">Product Details</label>
              <textarea 
                className="w-full h-32 px-8 text-2xl font-semibold border-2 border-slate-200 rounded-3xl bg-white/80 backdrop-blur-md shadow-xl focus:border-cyan-500 focus:ring-8 focus:ring-cyan-500/20 focus:shadow-2xl hover:border-blue-400 hover:shadow-2xl transition-all duration-400 placeholder-slate-400 resize-none group-hover/input:border-blue-300"
                placeholder="Enter product details"
                value={form.details} 
                onChange={(e) => setForm({ ...form, details: e.target.value })} 
              />
            </div>

            <div className="flex gap-4 pt-4">
              <button 
                type="submit"
                className="flex-1 h-20 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-700 hover:via-blue-700 hover:to-purple-700 text-2xl font-black text-white rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-400 flex items-center justify-center gap-4 group/button border-4 border-transparent hover:border-white/30 active:scale-[0.98]"
              >
                <span>{editing ? "🔄 UPDATE PRODUCT" : "➕ ADD PRODUCT"}</span>
                <svg className="w-8 h-8 group-hover/button:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </button>
              {editing && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-8 py-5 h-20 bg-gradient-to-r from-slate-400 to-slate-500 hover:from-slate-500 hover:to-slate-600 text-xl font-black text-white rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-400 flex items-center justify-center gap-3 border-4 border-transparent hover:border-white/20"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Products List Card */}
        <div className="bg-gradient-to-b from-slate-50/90 to-white/70 backdrop-blur-3xl rounded-3xl shadow-2xl border border-slate-200/60 p-12 hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 group/card overflow-hidden">
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl mx-auto mb-8 shadow-2xl flex items-center justify-center border-4 border-white/50 group-hover:scale-110 transition-all duration-500">
              <svg className="w-12 h-12 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight">
              Products List
            </h2>
            <p className="text-2xl text-slate-600 font-bold">Total: <span className="text-green-600">{products.length}</span></p>
          </div>

          <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-slate-300/50 scrollbar-track-slate-100/50 scrollbar-thumb-rounded-full">
            {products.length === 0 ? (
              <div className="text-center py-24">
                <div className="w-32 h-32 bg-gradient-to-r from-slate-100 to-slate-200 rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-2xl border-4 border-slate-200">
                  <svg className="w-16 h-16 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-slate-800 mb-2">No Products Yet</h3>
                <p className="text-xl text-slate-500 font-medium">Add your first product using the form above</p>
              </div>
            ) : (
              products.map((p) => (
                <div key={p.id} className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-slate-200/60 hover:border-green-400 hover:shadow-3xl hover:-translate-y-3 transition-all duration-500 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <span className="text-base font-bold text-green-600 uppercase tracking-wider">NAME</span>
                      <p className="text-4xl font-black text-slate-900 group-hover:text-green-700 transition-all duration-300 leading-tight">{p.name}</p>
                    </div>
                    <div className="pt-6 border-t-2 border-slate-200">
                      <span className="text-sm font-bold text-slate-600 uppercase tracking-wider block mb-4">DETAILS</span>
                      <p className="text-xl text-slate-700 leading-relaxed text-lg">{p.details}</p>
                    </div>
                    <div className="flex gap-4 pt-8 justify-end border-t-2 border-slate-200">
                      <button 
                        onClick={() => startEdit(p)}
                        className="px-8 py-5 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-xl font-black text-slate-900 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-400 flex items-center gap-3 h-16 border-4 border-transparent hover:border-white/20 group/edit"
                      >
                        <svg className="w-6 h-6 group-hover/edit:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Edit
                      </button>
                      <button 
                        onClick={() => deleteProduct(p.id)}
                        className="px-8 py-5 bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-xl font-black text-white rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-400 flex items-center gap-3 h-16 border-4 border-transparent hover:border-white/20 group/delete"
                      >
                        <svg className="w-6 h-6 group-hover/delete:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Delete
                      </button>
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
