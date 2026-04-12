import { Search, Menu, User } from 'lucide-react';

export function WikipediaHeader() {
  return (
    <header className="bg-white border-b border-gray-300">
      <div className="max-w-screen-2xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Menu className="w-6 h-6 text-gray-700 cursor-pointer" />
          <div className="flex flex-col">
            <h1 className="text-2xl font-serif">Wikipedia</h1>
            <p className="text-xs text-gray-600">The Free Portfolio</p>
          </div>
        </div>
        
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-1.5 pr-10 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="text-sm text-blue-600 hover:underline">Create account</button>
          <button className="text-sm text-blue-600 hover:underline">Log in</button>
          <User className="w-5 h-5 text-gray-700" />
        </div>
      </div>
    </header>
  );
}
