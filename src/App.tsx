import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';
import Plans from './pages/Plans';
import Games from './pages/Games';
import GameDetails from './pages/GameDetails';
import Domains from './pages/Domains';
import Discover from './pages/Discover';
import ServerDetails from './pages/ServerDetails';
import SubmitServer from './pages/SubmitServer';
import Auth from './pages/Auth';
import Dashboard from './pages/dashboard/Dashboard';
import MyServers from './pages/dashboard/MyServers';
import ServerOverview from './pages/dashboard/ServerOverview';
import ServerConsole from './pages/dashboard/ServerConsole';
import FileManager from './pages/dashboard/FileManager';
import ModManager from './pages/dashboard/ModManager';
import Backups from './pages/dashboard/Backups';
import Settings from './pages/dashboard/Settings';
import SupportCenter from './pages/support/SupportCenter';
import SupportTickets from './pages/support/SupportTickets';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminServers from './pages/admin/AdminServers';
import AdminCustomers from './pages/admin/AdminCustomers';
import AdminAnalytics from './pages/admin/AdminAnalytics';

export default function App() {
  return (
    <BrowserRouter basename="/HostNexf">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {/* Public Routes */}
          <Route index element={<Home />} />
          <Route path="plans" element={<Plans />} />
          <Route path="games" element={<Games />} />
          <Route path="games/:id" element={<GameDetails />} />
          <Route path="domains" element={<Domains />} />
          <Route path="discover" element={<Discover />} />
          <Route path="discover/:id" element={<ServerDetails />} />
          <Route path="submit" element={<SubmitServer />} />
          <Route path="auth" element={<Auth />} />

          {/* Customer Dashboard Routes */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/servers" element={<MyServers />} />
          <Route path="dashboard/servers/:id" element={<ServerOverview />} />
          <Route path="dashboard/servers/:id/console" element={<ServerConsole />} />
          <Route path="dashboard/servers/:id/files" element={<FileManager />} />
          <Route path="dashboard/servers/:id/mods" element={<ModManager />} />
          <Route path="dashboard/servers/:id/backups" element={<Backups />} />
          <Route path="dashboard/settings" element={<Settings />} />

          {/* Support Routes */}
          <Route path="support" element={<SupportCenter />} />
          <Route path="support/tickets" element={<SupportTickets />} />

          {/* Admin Routes */}
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/servers" element={<AdminServers />} />
          <Route path="admin/customers" element={<AdminCustomers />} />
          <Route path="admin/analytics" element={<AdminAnalytics />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
