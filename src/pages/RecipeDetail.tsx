import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import RecipeDetailComponent from '../components/recipe/RecipeDetail';
import { recipes } from '../data/recipes';
import { Recipe } from '../types';

const RecipeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // In a real app, this would be an API call
    const fetchRecipe = () => {
      setLoading(true);
      // Simulate API delay
      setTimeout(() => {
        const found = recipes.find(r => r.id === id);
        if (found) {
          setRecipe(found);
        }
        setLoading(false);
      }, 500);
    };
    
    fetchRecipe();
  }, [id]);
  
  return (
    <Layout>
      <div className="py-8">
        {loading ? (
          <div className="flex min-h-[60vh] items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-orange-500 border-t-transparent"></div>
          </div>
        ) : recipe ? (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <RecipeDetailComponent recipe={recipe} />
          </div>
        ) : (
          <div className="flex min-h-[60vh] items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">Recipe not found</h2>
              <p className="mt-2 text-gray-600">The recipe you're looking for doesn't exist or has been removed.</p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default RecipeDetailPage;