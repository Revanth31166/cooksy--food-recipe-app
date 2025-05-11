import React, { useState } from 'react';
import { Clock, Users, Star, ChefHat, Share2, Heart, Bookmark, Printer } from 'lucide-react';
import { Recipe, Review } from '../../types';
import Button from '../ui/Button';
import { useAuth } from '../../context/AuthContext';

interface RecipeDetailProps {
  recipe: Recipe;
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe }) => {
  const [activeTab, setActiveTab] = useState<'ingredients' | 'instructions'>('ingredients');
  const [isFavorite, setIsFavorite] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const { isAuthenticated } = useAuth();
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  
  const toggleSaved = () => {
    setIsSaved(!isSaved);
  };
  
  return (
    <div className="mx-auto max-w-4xl">
      {/* Hero section */}
      <div className="relative mb-8 overflow-hidden rounded-xl">
        <img 
          src={recipe.imageUrl} 
          alt={recipe.title}
          className="h-96 w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <div className="mb-2 flex space-x-2">
            <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-800">
              {recipe.category}
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
              {recipe.difficulty}
            </span>
          </div>
          <h1 className="mb-2 text-3xl font-bold text-white">{recipe.title}</h1>
          <p className="mb-4 text-gray-200">{recipe.description}</p>
          <div className="flex items-center text-white">
            <img 
              src={recipe.author.profileImage} 
              alt={recipe.author.name}
              className="mr-2 h-8 w-8 rounded-full border-2 border-white object-cover"
            />
            <span>by {recipe.author.name}</span>
          </div>
        </div>
      </div>
      
      {/* Recipe information */}
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="flex items-center justify-center rounded-lg bg-orange-50 p-4">
          <Clock className="mr-2 h-5 w-5 text-orange-500" />
          <div>
            <p className="text-sm font-medium text-gray-500">Total Time</p>
            <p className="text-lg font-semibold">{recipe.prepTime + recipe.cookTime} min</p>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-lg bg-orange-50 p-4">
          <Users className="mr-2 h-5 w-5 text-orange-500" />
          <div>
            <p className="text-sm font-medium text-gray-500">Servings</p>
            <p className="text-lg font-semibold">{recipe.servings} people</p>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-lg bg-orange-50 p-4">
          <Star className="mr-2 h-5 w-5 text-orange-500" />
          <div>
            <p className="text-sm font-medium text-gray-500">Rating</p>
            <p className="text-lg font-semibold">{recipe.ratings.toFixed(1)} ({recipe.reviews.length} reviews)</p>
          </div>
        </div>
      </div>
      
      {/* Action buttons */}
      <div className="mb-8 flex flex-wrap gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center"
          onClick={toggleFavorite}
        >
          <Heart className={`mr-1 h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
          {isFavorite ? 'Favorited' : 'Favorite'}
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center"
          onClick={toggleSaved}
        >
          <Bookmark className={`mr-1 h-4 w-4 ${isSaved ? 'fill-orange-500 text-orange-500' : ''}`} />
          {isSaved ? 'Saved' : 'Save'}
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center"
        >
          <Share2 className="mr-1 h-4 w-4" />
          Share
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center"
        >
          <Printer className="mr-1 h-4 w-4" />
          Print
        </Button>
      </div>
      
      {/* Tabs navigation */}
      <div className="mb-8 border-b">
        <div className="-mb-px flex space-x-8">
          <button
            className={`border-b-2 py-4 px-1 text-sm font-medium ${
              activeTab === 'ingredients'
                ? 'border-orange-500 text-orange-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('ingredients')}
          >
            Ingredients
          </button>
          <button
            className={`border-b-2 py-4 px-1 text-sm font-medium ${
              activeTab === 'instructions'
                ? 'border-orange-500 text-orange-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('instructions')}
          >
            Instructions
          </button>
        </div>
      </div>
      
      {/* Tab content */}
      <div className="mb-12">
        {activeTab === 'ingredients' && (
          <div>
            <h2 className="mb-4 text-xl font-bold">Ingredients</h2>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-orange-500"></div>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {activeTab === 'instructions' && (
          <div>
            <h2 className="mb-4 text-xl font-bold">Instructions</h2>
            <ol className="space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex">
                  <span className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                    {index + 1}
                  </span>
                  <p className="pt-1">{instruction}</p>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
      
      {/* Reviews section */}
      <div className="mb-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold">Reviews</h2>
          {isAuthenticated && (
            <Button variant="outline" size="sm">
              Write a Review
            </Button>
          )}
        </div>
        
        {recipe.reviews.length > 0 ? (
          <div className="space-y-6">
            {recipe.reviews.map((review: Review) => (
              <div key={review.id} className="rounded-lg border border-gray-200 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      src={review.user.profileImage || 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
                      alt={review.user.name}
                      className="mr-3 h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{review.user.name}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(review.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="mr-1 h-4 w-4 fill-amber-500 text-amber-500" />
                    <span>{review.rating}</span>
                  </div>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
            <p className="text-gray-500">No reviews yet. Be the first to review!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeDetail;