import { useEffect, useState } from "react";
import Layout from "../components/Layout";

const API_ORDERS = "http://localhost:8080/orders";
const API_PRODUCTS = "http://localhost:8080/products";
const API_CUSTOMERS = "http://localhost:8080/customers";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    ordername: "",
    orderdetails: "",
    quantity: 1,
    price: 0,
    orderdate: "",
  });
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");

  useEffect(() => {
    loadOrders();
    loadProducts();
    loadCustomers();
  }, []);

  const loadOrders = async () => {
    const res = await fetch(API_ORDERS);
    const data = await res.json();
    setOrders(data);
  };

  const loadProducts = async () => {
    const res = await fetch(API_PRODUCTS);
    const data = await res.json();
    setProducts(data);
  };

  const loadCustomers = async () => {
    const res = await fetch(API_CUSTOMERS);
    const data = await res.json();
    setCustomers(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(editing ? `${API_ORDERS}/${editing}` : API_ORDERS, {
      method: editing ? "PUT" : "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    resetForm();
    setEditing(null);
    loadOrders();
  };

  const deleteOrder = async (id) => {
    await fetch(`${API_ORDERS}/${id}`, { method: "DELETE" });
    loadOrders();
  };

  const startEdit = (order) => {
    setEditing(order.id);
    setForm({
      ordername: order.ordername,
      orderdetails: order.orderdetails,
      quantity: order.quantity,
      price: order.price,
      orderdate: order.orderdate,
    });
  };

  const resetForm = () => {
    setForm({
      ordername: "",
      orderdetails: "",
      quantity: 1,
      price: 0,
      orderdate: "",
    });
    setSelectedCustomer("");
    setSelectedProduct("");
  };

  const assignOrder = async (orderId) => {
    if (!selectedCustomer || !selectedProduct) return alert("Select both product and customer");
    await fetch(`${API_ORDERS}/${orderId}/product/${selectedProduct}/customer/${selectedCustomer}`, { method: "PUT" });
    loadOrders();
  };

  return (
    <Layout>
      <div className="bg-gradient-to-br from-slate-900 via-blue-900/50 to-violet-900/80 text-white py-24 px-8 rounded-3xl shadow-2xl mb-16 border border-slate-700/50 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl tracking-tight">
            Orders
          </h1>
          <p className="text-xl md:text-2xl font-medium text-slate-300 tracking-wide leading-relaxed max-w-2xl mx-auto">
            Manage orders with precision and seamless assignment
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-8 mb-12">
        
        {/* Add/Edit Order Form Card */}
        <div className="bg-gradient-to-b from-slate-50/90 to-white/70 backdrop-blur-3xl rounded-3xl shadow-2xl border border-slate-200/60 p-12 hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 group/card">
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl mx-auto mb-8 shadow-2xl flex items-center justify-center border-4 border-white/50 group-hover:scale-110 transition-all duration-500">
              <svg className="w-12 h-12 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight">
              {editing ? "Update Order" : "Create New Order"}
            </h2>
            <p className="text-lg text-slate-600 font-medium">Order details</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {[
              { key: "ordername", label: "Order Name", placeholder: "Enter order name" },
              { key: "orderdetails", label: "Order Details", placeholder: "Enter order details" },
              { key: "quantity", label: "Quantity", placeholder: "Enter quantity", type: "number" },
              { key: "price", label: "Price ₹", placeholder: "Enter price", type: "number" },
              { key: "orderdate", label: "Order Date", type: "date" }
            ].map((field) => (
              <div key={field.key} className="group/input">
                <label className="block text-xl font-bold text-slate-800 mb-4 tracking-wide capitalize">
                  {field.label}
                </label>
                <input 
                  type={field.type || "text"}
                  className="w-full h-20 px-8 text-2xl font-semibold border-2 border-slate-200 rounded-3xl bg-white/80 backdrop-blur-md shadow-xl focus:border-cyan-500 focus:ring-8 focus:ring-cyan-500/20 focus:shadow-2xl hover:border-blue-400 hover:shadow-2xl transition-all duration-400 placeholder-slate-400 group-hover/input:border-blue-300"
                  placeholder={field.placeholder}
                  value={form[field.key]} 
                  onChange={e => setForm({ ...form, [field.key]: e.target.value })} 
                />
              </div>
            ))}
            <div className="flex gap-4 pt-4">
              <button 
                type="submit"
                className="flex-1 h-20 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-700 hover:via-blue-700 hover:to-purple-700 text-2xl font-black text-white rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-400 flex items-center justify-center gap-4 group/button border-4 border-transparent hover:border-white/30 active:scale-[0.98]"
              >
                <span>{editing ? "🔄 UPDATE ORDER" : "➕ CREATE ORDER"}</span>
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

        {/* Orders List Card */}
        <div className="bg-gradient-to-b from-slate-50/90 to-white/70 backdrop-blur-3xl rounded-3xl shadow-2xl border border-slate-200/60 p-12 hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 group/card overflow-hidden">
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl mx-auto mb-8 shadow-2xl flex items-center justify-center border-4 border-white/50 group-hover:scale-110 transition-all duration-500">
              <svg className="w-12 h-12 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight">
              Orders List
            </h2>
            <p className="text-2xl text-slate-600 font-bold">Total: <span className="text-indigo-600">{orders.length}</span></p>
          </div>

          <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-slate-300/50 scrollbar-track-slate-100/50 scrollbar-thumb-rounded-full">
            {orders.length === 0 ? (
              <div className="text-center py-24">
                <div className="w-32 h-32 bg-gradient-to-r from-slate-100 to-slate-200 rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-2xl border-4 border-slate-200">
                  <svg className="w-16 h-16 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-slate-800 mb-2">No Orders Yet</h3>
                <p className="text-xl text-slate-500 font-medium">Create your first order using the form above</p>
              </div>
            ) : (
              orders.map((o) => (
                <div key={o.id} className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-slate-200/60 hover:border-indigo-400 hover:shadow-3xl hover:-translate-y-3 transition-all duration-500 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-2">
                      <span className="text-base font-bold text-indigo-600 uppercase tracking-wider">ORDER NAME</span>
                      <p className="text-3xl font-black text-slate-900 group-hover:text-indigo-700 transition-all duration-300 leading-tight">{o.ordername}</p>
                    </div>
                    <div className="space-y-4 lg:col-span-1">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider block mb-1">QTY</span>
                          <p className="text-2xl font-bold text-slate-900">{o.quantity}</p>
                        </div>
                        <div>
                          <span className="text-sm font-bold text-blue-600 uppercase tracking-wider block mb-1">PRICE</span>
                          <p className="text-2xl font-bold text-slate-900">₹{o.price}</p>
                        </div>
                      </div>
                      <div>
                        <span className="text-sm font-bold text-amber-600 uppercase tracking-wider block mb-1">TOTAL</span>
                        <p className="text-2xl font-bold text-slate-900">₹{o.totalprice || 0}</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-t-2 border-slate-200 pt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <span className="text-sm font-bold text-slate-600 uppercase tracking-wider block mb-2">DATE</span>
                      <p className="text-xl font-semibold text-slate-700">{o.orderdate}</p>
                      <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${o.status === 'completed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                        {o.status || 'Pending'}
                      </span>
                    </div>
                    <div className="space-y-2 lg:text-right">
                      <div>
                        <span className="text-sm font-bold text-blue-600 uppercase tracking-wider block mb-1">PRODUCT</span>
                        <p className="text-lg font-semibold text-slate-700">{o.product?.name || '-'}</p>
                      </div>
                      <div>
                        <span className="text-sm font-bold text-purple-600 uppercase tracking-wider block mb-1">CUSTOMER</span>
                        <p className="text-lg font-semibold text-slate-700">{o.customer?.name || '-'}</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-t-2 border-slate-200 pt-8 mt-6">
                    <div className="flex gap-4 justify-end">
                      <button 
                        onClick={() => startEdit(o)}
                        className="px-8 py-5 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-xl font-black text-slate-900 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-400 flex items-center gap-3 h-16 border-4 border-transparent hover:border-white/20 group/edit"
                      >
                        <svg className="w-6 h-6 group-hover/edit:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Edit
                      </button>
                      <button 
                        onClick={() => deleteOrder(o.id)}
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

      {/* Assign Section Card */}
      <div className="max-w-4xl mx-auto px-8">
        <div className="bg-gradient-to-b from-slate-50/90 to-white/70 backdrop-blur-3xl rounded-3xl shadow-2xl border border-slate-200/60 p-12 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl mx-auto mb-8 shadow-2xl flex items-center justify-center border-4 border-white/50">
              <svg className="w-12 h-12 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight">
              Assign Order
            </h2>
            <p className="text-xl text-slate-600 font-medium">Link products and customers to orders</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group/input">
              <label className="block text-xl font-bold text-slate-800 mb-4 tracking-wide">Product</label>
              <select
                className="w-full h-20 px-8 text-2xl font-semibold border-2 border-slate-200 rounded-3xl bg-white/80 backdrop-blur-md shadow-xl focus:border-emerald-500 focus:ring-8 focus:ring-emerald-500/20 focus:shadow-2xl hover:border-green-400 hover:shadow-2xl transition-all duration-400"
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
              >
                <option value="">Select Product</option>
                {products.map((p) => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            </div>

            <div className="group/input">
              <label className="block text-xl font-bold text-slate-800 mb-4 tracking-wide">Customer</label>
              <select
                className="w-full h-20 px-8 text-2xl font-semibold border-2 border-slate-200 rounded-3xl bg-white/80 backdrop-blur-md shadow-xl focus:border-emerald-500 focus:ring-8 focus:ring-emerald-500/20 focus:shadow-2xl hover:border-green-400 hover:shadow-2xl transition-all duration-400"
                value={selectedCustomer}
                onChange={(e) => setSelectedCustomer(e.target.value)}
              >
                <option value="">Select Customer</option>
                {customers.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>

            <div className="group/input">
              <label className="block text-xl font-bold text-slate-800 mb-4 tracking-wide">Order</label>
              <select
                className="w-full h-20 px-8 text-2xl font-semibold border-2 border-slate-200 rounded-3xl bg-white/80 backdrop-blur-md shadow-xl focus:border-emerald-500 focus:ring-8 focus:ring-emerald-500/20 focus:shadow-2xl hover:border-green-400 hover:shadow-2xl transition-all duration-400"
                onChange={(e) => assignOrder(e.target.value)}
              >
                <option value="">Choose Order</option>
                {orders.map((o) => (
                  <option key={o.id} value={o.id}>Order #{o.id}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

     
    </Layout>
  );
}
