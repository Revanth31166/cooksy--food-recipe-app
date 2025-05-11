import React from 'react';
import { Link } from 'react-router-dom';
import RecipeList from '../recipe/RecipeList';
import { recipes } from '../../data/recipes';
import Button from '../ui/Button';

const TopRecipes: React.FC = () => {
  // Sort recipes by rating to get top-rated ones
  const topRatedRecipes = [...recipes].sort((a, b) => b.ratings - a.ratings).slice(0, 4);
  
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Top Rated Recipes</h2>
          <p className="mt-2 text-lg text-gray-600">Our community's favorite recipes with the highest ratings</p>
        </div>
        
        <RecipeList recipes={topRatedRecipes} />
        
        <div className="mt-10 text-center">
          <Link to="/recipes">
            <Button>View All Recipes</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopRecipes;