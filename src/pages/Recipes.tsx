import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import RecipeList from '../components/recipe/RecipeList';
import { recipes as allRecipes, categories, popularTags } from '../data/recipes';
import { Recipe } from '../types';
import { Search, Filter } from 'lucide-react';
import Button from '../components/ui/Button';

const RecipesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Update recipes based on filters
  useEffect(() => {
    let filtered = [...allRecipes];
    
    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(recipe => 
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply category filter
    if (selectedCategory && selectedCategory !== 'All') {
      filtered = filtered.filter(recipe => recipe.category === selectedCategory);
    }
    
    // Apply tag filters
    if (selectedTags.length > 0) {
      filtered = filtered.filter(recipe => 
        selectedTags.some(tag => recipe.tags.includes(tag))
      );
    }
    
    setRecipes(filtered);
  }, [searchTerm, selectedCategory, selectedTags]);
  
  // Update URL parameters when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchTerm) params.set('search', searchTerm);
    if (selectedCategory && selectedCategory !== 'All') params.set('category', selectedCategory);
    setSearchParams(params);
  }, [searchTerm, selectedCategory, setSearchParams]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // The search is already being applied via the useEffect
  };
  
  const toggleTag = (tag: string) => {
    setSelectedTags(prevTags => 
      prevTags.includes(tag)
        ? prevTags.filter(t => t !== tag)
        : [...prevTags, tag]
    );
  };
  
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedTags([]);
  };
  
  return (
    <Layout>
      <div className="bg-orange-50 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-2 text-3xl font-bold text-gray-900">Explore Recipes</h1>
            <p className="mb-8 text-lg text-gray-600">
              Discover delicious recipes for every meal and occasion
            </p>
          </div>
          
          {/* Search bar */}
          <div className="mb-8">
            <form onSubmit={handleSearch} className="group relative mx-auto max-w-2xl">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search recipes by name or ingredients..."
                className="w-full rounded-full border-0 bg-white py-3 pl-10 pr-20 text-gray-900 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
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
          
          {/* Filter button (mobile) */}
          <div className="mb-4 md:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex w-full items-center justify-center rounded-md bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
            >
              <Filter className="mr-2 h-4 w-4" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Filters (sidebar) */}
            <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-medium text-gray-900">Categories</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <label key={category} className="flex items-center">
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category)}
                          className="h-4 w-4 text-orange-500 focus:ring-orange-500"
                        />
                        <span className="ml-2 text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-medium text-gray-900">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`rounded-full px-3 py-1 text-sm font-medium ${
                          selectedTags.includes(tag)
                            ? 'bg-orange-500 text-white'
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
                
                <button
                  onClick={clearFilters}
                  className="w-full rounded-md border border-gray-300 py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Clear Filters
                </button>
              </div>
            </div>
            
            {/* Recipe list */}
            <div className="md:col-span-3">
              {recipes.length > 0 ? (
                <RecipeList recipes={recipes} />
              ) : (
                <div className="flex h-60 flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-8 text-center">
                  <p className="mb-2 text-lg font-medium text-gray-900">No recipes found</p>
                  <p className="text-gray-600">Try adjusting your search criteria or explore our categories</p>
                  <button
                    onClick={clearFilters}
                    className="mt-4 rounded-md bg-orange-500 py-2 px-4 text-sm font-medium text-white hover:bg-orange-600"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RecipesPage;