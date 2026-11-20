import { useState } from 'react';
import { Search, Gamepad2 } from 'lucide-react';
import GameCard from '../components/shared/GameCard';
import { MOCK_GAMES } from '../data/mockData';
import Input from '../components/ui/Input';

export default function Games() {
  const [search, setSearch] = useState('');

  const filteredGames = MOCK_GAMES.filter((game) =>
    game.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto w-full py-12 px-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-extrabold text-white mb-3 flex items-center gap-3">
            <Gamepad2 className="w-8 h-8 text-primary" />
            Games Catalog
          </h1>
          <p className="text-gray-400 max-w-xl">
            Host your favorite games with ease. One-click installs, instant setup, and optimized performance for every title.
          </p>
        </div>
        <div className="w-full md:w-72">
          <Input
            placeholder="Search games..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            icon={<Search className="w-4 h-4 text-gray-500" />}
          />
        </div>
      </div>

      {filteredGames.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
          <Gamepad2 className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No games found</h3>
          <p className="text-gray-400">Try adjusting your search term.</p>
        </div>
      )}
    </div>
  );
}