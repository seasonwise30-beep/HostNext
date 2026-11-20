export const MOCK_PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    ram: '2 GB',
    price: 149,
    features: ['2 GB RAM', '10 GB SSD', 'Basic Backups', 'Standard Support'],
    popular: false
  },
  {
    id: 'gamer',
    name: 'Gamer',
    ram: '4 GB',
    price: 299,
    features: ['4 GB RAM', '20 GB SSD', 'Auto Backups', 'Priority Support'],
    popular: false
  },
  {
    id: 'pro',
    name: 'Pro',
    ram: '8 GB',
    price: 599,
    features: ['8 GB RAM', '40 GB SSD', 'Advanced Backups', 'Priority Support'],
    popular: true
  },
  {
    id: 'ultimate',
    name: 'Ultimate',
    ram: '16 GB',
    price: 1099,
    features: ['16 GB RAM', '80 GB SSD', 'Advanced Backups', 'Premium Support'],
    popular: false
  }
];

export const MOCK_GAMES = [
  { id: 'minecraft', name: 'Minecraft', players: '42/100', image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 'palworld', name: 'Palworld', players: '18/32', image: 'https://images.unsplash.com/photo-1642583026370-9a4e7418b7a3?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 'ark', name: 'ARK: Survival', players: '56/70', image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 'rust', name: 'Rust', players: '120/200', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 'cs2', name: 'Counter-Strike 2', players: '10/10', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 'valheim', name: 'Valheim', players: '4/10', image: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?auto=format&fit=crop&q=80&w=400&h=300' },
];

export const MOCK_SERVERS = [
  {
    id: '1',
    name: 'Minecraft Server',
    ip: 'play.hostnext.in',
    game: 'Minecraft',
    status: 'Online',
    players: '12/50',
    ram: { used: 3.2, total: 6 },
    cpu: 28,
  },
  {
    id: '2',
    name: 'Palworld World',
    ip: 'pal.hostnext.in',
    game: 'Palworld',
    status: 'Online',
    players: '4/16',
    ram: { used: 2.1, total: 4 },
    cpu: 15,
  },
];

export const MOCK_DOMAINS = [
  { tld: '.com', price: 499, popular: true },
  { tld: '.net', price: 499, popular: false },
  { tld: '.org', price: 499, popular: false },
  { tld: '.in', price: 249, popular: false },
  { tld: '.xyz', price: 299, popular: false },
  { tld: '.gg', price: 999, popular: false },
];

export const MOCK_FILES = [
  { name: 'plugins', type: 'folder', size: '--', modified: '2023-10-24' },
  { name: 'world', type: 'folder', size: '--', modified: '2023-10-24' },
  { name: 'server.properties', type: 'file', size: '1.2 KB', modified: '2023-10-24' },
  { name: 'server.jar', type: 'file', size: '45 MB', modified: '2023-10-20' },
  { name: 'eula.txt', type: 'file', size: '0.1 KB', modified: '2023-10-20' },
];

export const MOCK_TICKETS = [
  { id: 'TKT-1042', subject: 'Server lag issues', status: 'Open', priority: 'High', date: '2 hours ago' },
  { id: 'TKT-1039', subject: 'Billing question', status: 'Resolved', priority: 'Low', date: '1 day ago' },
  { id: 'TKT-1035', subject: 'How to install plugins?', status: 'Closed', priority: 'Medium', date: '3 days ago' },
];

export const CHART_DATA = [
  { name: 'Mon', revenue: 4000 },
  { name: 'Tue', revenue: 3000 },
  { name: 'Wed', revenue: 5000 },
  { name: 'Thu', revenue: 4500 },
  { name: 'Fri', revenue: 6000 },
  { name: 'Sat', revenue: 5500 },
  { name: 'Sun', revenue: 7000 },
];