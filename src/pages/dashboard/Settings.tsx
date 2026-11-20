import { useState } from 'react';
import { Settings as SettingsIcon, User, Bell, Shield, CreditCard, Key } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Toggle from '../../components/ui/Toggle';

export default function Settings() {
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [securityAlerts, setSecurityAlerts] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-white flex items-center gap-2 mb-1">
          <SettingsIcon className="w-6 h-6 text-primary" /> Settings
        </h1>
        <p className="text-gray-400 text-sm">Manage your account preferences and security.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Settings Nav (Visual Only) */}
        <div className="md:col-span-1 space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20 font-medium text-sm">
            <User className="w-4 h-4" /> Profile
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 font-medium text-sm transition-colors">
            <Bell className="w-4 h-4" /> Notifications
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 font-medium text-sm transition-colors">
            <Shield className="w-4 h-4" /> Security
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 font-medium text-sm transition-colors">
            <CreditCard className="w-4 h-4" /> Billing
          </button>
        </div>

        {/* Content */}
        <div className="md:col-span-3 space-y-6">
          <GlassCard className="p-6">
            <h2 className="text-lg font-bold text-white mb-4">Profile Information</h2>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-white">
                A
              </div>
              <Button variant="secondary" size="sm">Change Avatar</Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input label="Full Name" defaultValue="Alex Player" />
              <Input label="Username" defaultValue="AlexPlayer" />
              <Input label="Email Address" defaultValue="alex@example.com" type="email" />
              <Input label="Phone Number" defaultValue="+91 98765 43210" type="tel" />
            </div>
            <div className="mt-6 flex justify-end">
              <Button variant="primary">Save Changes</Button>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h2 className="text-lg font-bold text-white mb-4">Notification Preferences</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                <div>
                  <div className="font-medium text-white text-sm">Email Notifications</div>
                  <div className="text-xs text-gray-400">Receive updates about your servers via email.</div>
                </div>
                <Toggle checked={emailNotifs} onChange={setEmailNotifs} />
              </div>
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                <div>
                  <div className="font-medium text-white text-sm">Security Alerts</div>
                  <div className="text-xs text-gray-400">Get notified about new logins and security changes.</div>
                </div>
                <Toggle checked={securityAlerts} onChange={setSecurityAlerts} />
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6 border-red-500/20 bg-red-500/[0.02]">
            <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Key className="w-5 h-5 text-red-400" /> Two-Factor Authentication
            </h2>
            <p className="text-sm text-gray-400 mb-4">Add an extra layer of security to your account.</p>
            <div className="flex items-center justify-between">
              <span className={`text-sm font-medium ${twoFactor ? 'text-emerald-400' : 'text-gray-300'}`}>
                {twoFactor ? 'Enabled' : 'Disabled'}
              </span>
              <Toggle checked={twoFactor} onChange={setTwoFactor} />
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}