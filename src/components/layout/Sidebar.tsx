import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Server,
  FolderOpen,
  Puzzle,
  HardDriveDownload,
  Settings,
  LifeBuoy,
  ShieldCheck,
  Users,
  BarChart3,
  ChevronRight,
} from 'lucide-react';

const MAIN_LINKS = [
  { name: 'Overview', path: '/dashboard', icon: LayoutDashboard },
  { name: 'My Servers', path: '/dashboard/servers', icon: Server },
];

const SERVER_LINKS = [
  { name: 'Console', path: '/dashboard/servers/1/console', icon: Server },
  { name: 'File Manager', path: '/dashboard/servers/1/files', icon: FolderOpen },
  { name: 'Mods & Plugins', path: '/dashboard/servers/1/mods', icon: Puzzle },
  { name: 'Backups', path: '/dashboard/servers/1/backups', icon: HardDriveDownload },
];

const SUPPORT_LINKS = [
  { name: 'Support Center', path: '/support', icon: LifeBuoy },
  { name: 'My Tickets', path: '/support/tickets', icon: ShieldCheck },
];

const ADMIN_LINKS = [
  { name: 'Admin Dashboard', path: '/admin', icon: LayoutDashboard },
  { name: 'Server Management', path: '/admin/servers', icon: Server },
  { name: 'Customers', path: '/admin/customers', icon: Users },
  { name: 'Analytics', path: '/admin/analytics', icon: BarChart3 },
];

export default function Sidebar() {
  const location = useLocation();

  const renderLinks = (links: typeof MAIN_LINKS, title: string) => (
    <div className="mb-6">
      <h3 className="px-3 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        {title}
      </h3>
      <div className="space-y-1">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          const Icon = link.icon;
          return (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                isActive
                  ? 'bg-primary/10 text-primary border border-primary/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${isActive ? 'text-primary' : 'text-gray-500 group-hover:text-gray-300'}`} />
                {link.name}
              </div>
              {isActive && <ChevronRight className="w-4 h-4 text-primary" />}
            </Link>
          );
        })}
      </div>
    </div>
  );

  return (
    <aside className="w-64 flex-shrink-0 bg-[#0B0F19]/50 border-r border-white/5 overflow-y-auto custom-scrollbar hidden lg:block">
      <div className="p-4 sticky top-16">
        {renderLinks(MAIN_LINKS, 'Main')}
        {renderLinks(SERVER_LINKS, 'Server (Minecraft)')}
        {renderLinks(SUPPORT_LINKS, 'Support')}
        {renderLinks(ADMIN_LINKS, 'Administration')}
        
        <div className="mt-8 pt-4 border-t border-white/5">
          <Link
            to="/dashboard/settings"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all"
          >
            <Settings className="w-4 h-4 text-gray-500" />
            Account Settings
          </Link>
        </div>
      </div>
    </aside>
  );
}