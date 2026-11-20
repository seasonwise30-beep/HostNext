import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';

export default function AppLayout() {
  const location = useLocation();
  
  // Define which routes should show the sidebar
  const showSidebar = 
    location.pathname.startsWith('/dashboard') || 
    location.pathname.startsWith('/admin') || 
    location.pathname.startsWith('/support');

  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[120px] pointer-events-none" />

      <Navbar />
      
      <div className="flex flex-1 pt-16 relative z-10">
        {showSidebar && <Sidebar />}
        
        <main className="flex-1 flex flex-col min-w-0">
          <div className="flex-1 p-4 md:p-6 lg:p-8">
            <Outlet />
          </div>
          {!showSidebar && <Footer />}
        </main>
      </div>
    </div>
  );
}