import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/recipes?search=${encodeURIComponent(searchTerm)}`);
    }
  };
  
  return (
    <div className="relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ 
        backgroundImage: `url('https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      </div>
      
      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 className="mb-6 animate-fade-in text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Discover <span className="text-orange-500">Delicious</span> Recipes for Every Occasion
        </h1>
        
        <p className="mb-8 max-w-2xl text-xl text-gray-200">
          Find and share the best recipes from around the world. Cook like a pro with step-by-step instructions.
        </p>
        
        <div className="mb-8 w-full max-w-2xl">
          <form onSubmit={handleSearch} className="group relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for recipes, ingredients, or cuisines..."
              className="w-full rounded-full border-0 bg-white py-4 pl-10 pr-20 text-gray-900 shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute right-1 top-1/2 -translate-y-1/2">
              <Button type="submit" size="sm">
                Search
              </Button>
            </div>
          </form>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">Quick Dinner</span>
          <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">Vegetarian</span>
          <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">Desserts</span>
          <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">Healthy</span>
          <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">Italian</span>
        </div>
      </div>
      
      {/* Curved bottom */}
      <div className="absolute -bottom-1 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,128L80,144C160,160,320,192,480,186.7C640,181,800,139,960,133.3C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;