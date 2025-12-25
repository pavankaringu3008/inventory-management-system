// Layout.jsx 
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <Sidebar />
      <main className="flex-1 p-12 lg:pl-4">{children}</main>
    </div>
  );
}
