import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/recipes';
import { Button } from '../ui/Button';

const categoryImages = [
  {
    name: 'Breakfast',
    image: 'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'Lunch',
    image: 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'Dinner',
    image: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'Dessert',
    image: 'https://images.pexels.com/photos/2919790/pexels-photo-2919790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'Pasta',
    image: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'Soup',
    image: 'https://images.pexels.com/photos/688800/pexels-photo-688800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const FeaturedCategories: React.FC = () => {
  // Only show 6 categories for this section
  const featuredCategories = categoryImages.slice(0, 6);
  
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Explore Categories</h2>
          <p className="mt-2 text-lg text-gray-600">Find recipes by category to suit your mood and diet</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {featuredCategories.map((category) => (
            <Link 
              key={category.name}
              to={`/recipes?category=${encodeURIComponent(category.name)}`}
              className="group overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-3">
                  <h3 className="text-center text-lg font-medium text-white">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link to="/categories">
            <Button variant="outline">View All Categories</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;