import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star } from 'lucide-react';
import { Recipe } from '../../types';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const { id, title, description, imageUrl, prepTime, cookTime, servings, ratings, difficulty } = recipe;
  
  // Get total time (prep + cook)
  const totalTime = prepTime + cookTime;
  
  // Get difficulty color
  const difficultyColor = {
    Easy: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Hard: 'bg-red-100 text-red-800'
  }[difficulty];

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link to={`/recipe/${id}`}>
        <div className="relative h-48 w-full overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-0 right-0 m-2">
            <span className={`rounded-full px-2 py-1 text-xs font-medium ${difficultyColor}`}>
              {difficulty}
            </span>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="mb-2 text-lg font-bold text-gray-900 line-clamp-1">{title}</h3>
          
          <p className="mb-4 text-sm text-gray-600 line-clamp-2">{description}</p>
          
          <div className="mb-4 flex items-center text-sm text-gray-500">
            <div className="mr-4 flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              <span>{totalTime} min</span>
            </div>
            <div className="mr-4 flex items-center">
              <Users className="mr-1 h-4 w-4" />
              <span>{servings}</span>
            </div>
            <div className="flex items-center text-amber-500">
              <Star className="mr-1 h-4 w-4 fill-current" />
              <span>{ratings.toFixed(1)}</span>
            </div>
          </div>
          
          <div className="flex items-center">
            <img 
              src={recipe.author.profileImage} 
              alt={recipe.author.name}
              className="mr-2 h-6 w-6 rounded-full object-cover"
            />
            <span className="text-xs text-gray-600">by {recipe.author.name}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecipeCard;