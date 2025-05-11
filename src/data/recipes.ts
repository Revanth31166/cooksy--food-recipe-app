import { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Creamy Garlic Parmesan Pasta',
    description: 'A rich and creamy pasta dish that comes together in just 20 minutes. Perfect for weeknight dinners!',
    imageUrl: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    prepTime: 5,
    cookTime: 15,
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      '8 oz fettuccine pasta',
      '2 tbsp butter',
      '4 cloves garlic, minced',
      '1 cup heavy cream',
      '1 cup grated Parmesan cheese',
      'Salt and pepper to taste',
      '2 tbsp fresh parsley, chopped'
    ],
    instructions: [
      'Cook pasta according to package instructions.',
      'In a large skillet, melt butter over medium heat.',
      'Add minced garlic and sauté for 1 minute until fragrant.',
      'Pour in heavy cream and bring to a simmer.',
      'Add Parmesan cheese and stir until melted and smooth.',
      'Season with salt and pepper to taste.',
      'Add cooked pasta to the sauce and toss to coat.',
      'Garnish with fresh parsley before serving.'
    ],
    category: 'Pasta',
    tags: ['Italian', 'Quick Meals', 'Vegetarian'],
    author: {
      id: '1',
      name: 'Jamie Oliver',
      email: 'jamie@example.com',
      profileImage: 'https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    ratings: 4.8,
    reviews: [
      {
        id: '1',
        user: {
          id: '2',
          name: 'Sarah Johnson',
          email: 'sarah@example.com'
        },
        rating: 5,
        comment: 'Absolutely delicious! My family loved it.',
        createdAt: '2024-09-15T12:30:00.000Z'
      }
    ],
    createdAt: '2024-09-10T09:15:00.000Z'
  },
  {
    id: '2',
    title: 'Avocado Toast with Poached Eggs',
    description: 'Start your day with this nutritious and Instagram-worthy breakfast!',
    imageUrl: 'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    prepTime: 10,
    cookTime: 5,
    servings: 2,
    difficulty: 'Easy',
    ingredients: [
      '2 slices of sourdough bread',
      '1 ripe avocado',
      '2 eggs',
      '1 tbsp white vinegar',
      'Red pepper flakes',
      'Salt and pepper to taste',
      'Fresh herbs for garnish'
    ],
    instructions: [
      'Toast bread until golden and crispy.',
      'Mash avocado and spread over toast.',
      'Bring a pot of water to a gentle simmer and add vinegar.',
      'Crack each egg into a small bowl, then gently slide into the simmering water.',
      'Poach eggs for 3-4 minutes until whites are set but yolks are still runny.',
      'Using a slotted spoon, remove eggs and place on top of avocado toast.',
      'Season with salt, pepper, and red pepper flakes.',
      'Garnish with fresh herbs before serving.'
    ],
    category: 'Breakfast',
    tags: ['Healthy', 'Brunch', 'Vegetarian'],
    author: {
      id: '3',
      name: 'Gordon Ramsay',
      email: 'gordon@example.com',
      profileImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    ratings: 4.5,
    reviews: [
      {
        id: '2',
        user: {
          id: '4',
          name: 'Michael Smith',
          email: 'michael@example.com'
        },
        rating: 4,
        comment: 'Great breakfast idea! I added some feta cheese on top.',
        createdAt: '2024-09-16T08:45:00.000Z'
      }
    ],
    createdAt: '2024-09-12T07:30:00.000Z'
  },
  {
    id: '3',
    title: 'Chicken Tikka Masala',
    description: 'A flavorful Indian curry dish with tender chunks of chicken in a creamy tomato sauce.',
    imageUrl: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    prepTime: 20,
    cookTime: 40,
    servings: 6,
    difficulty: 'Medium',
    ingredients: [
      '2 lbs boneless chicken thighs, cut into chunks',
      '1 cup plain yogurt',
      '3 tbsp lemon juice',
      '4 cloves garlic, minced',
      '2 tbsp ginger, grated',
      '2 tbsp garam masala',
      '1 tbsp turmeric',
      '1 tbsp cumin',
      '1 large onion, diced',
      '2 tbsp butter',
      '14 oz can tomato sauce',
      '1 cup heavy cream',
      'Fresh cilantro for garnish'
    ],
    instructions: [
      'In a bowl, mix yogurt, lemon juice, garlic, ginger, and spices.',
      'Add chicken chunks and marinate for at least 1 hour (overnight is better).',
      'Preheat grill or broiler. Thread chicken onto skewers and grill until charred and cooked through.',
      'In a large pot, melt butter and sauté onions until soft.',
      'Add tomato sauce and bring to a simmer.',
      'Stir in cream and simmer for 10 minutes.',
      'Add grilled chicken to the sauce and simmer for another 5-10 minutes.',
      'Serve hot with rice and naan bread, garnished with cilantro.'
    ],
    category: 'Main Course',
    tags: ['Indian', 'Spicy', 'Curry'],
    author: {
      id: '5',
      name: 'Nigella Lawson',
      email: 'nigella@example.com',
      profileImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    ratings: 4.9,
    reviews: [
      {
        id: '3',
        user: {
          id: '6',
          name: 'David Wilson',
          email: 'david@example.com'
        },
        rating: 5,
        comment: 'Incredible flavor! Just like at my favorite Indian restaurant.',
        createdAt: '2024-09-14T19:20:00.000Z'
      }
    ],
    createdAt: '2024-09-08T14:45:00.000Z'
  },
  {
    id: '4',
    title: 'Classic Chocolate Chip Cookies',
    description: 'Soft and chewy chocolate chip cookies with a perfect golden edge.',
    imageUrl: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    prepTime: 15,
    cookTime: 10,
    servings: 24,
    difficulty: 'Easy',
    ingredients: [
      '2 1/4 cups all-purpose flour',
      '1 tsp baking soda',
      '1 tsp salt',
      '1 cup unsalted butter, softened',
      '3/4 cup granulated sugar',
      '3/4 cup packed brown sugar',
      '2 large eggs',
      '2 tsp vanilla extract',
      '2 cups semi-sweet chocolate chips'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'In a small bowl, mix flour, baking soda, and salt.',
      'In a large bowl, beat butter and sugars until creamy.',
      'Add eggs one at a time, then vanilla, beating well after each addition.',
      'Gradually add flour mixture and mix well.',
      'Stir in chocolate chips.',
      'Drop by rounded tablespoons onto ungreased baking sheets.',
      'Bake for 9-11 minutes until golden brown.',
      'Let cool on baking sheet for 2 minutes, then transfer to wire racks.'
    ],
    category: 'Dessert',
    tags: ['Baking', 'Cookies', 'Chocolate'],
    author: {
      id: '7',
      name: 'Martha Stewart',
      email: 'martha@example.com',
      profileImage: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    ratings: 4.7,
    reviews: [
      {
        id: '4',
        user: {
          id: '8',
          name: 'Jessica Brown',
          email: 'jessica@example.com'
        },
        rating: 5,
        comment: 'These cookies are amazing! Perfectly chewy with crisp edges.',
        createdAt: '2024-09-17T15:10:00.000Z'
      }
    ],
    createdAt: '2024-09-05T11:25:00.000Z'
  },
  {
    id: '5',
    title: 'Fresh Summer Salad',
    description: 'A refreshing salad packed with seasonal vegetables and a zesty lemon dressing.',
    imageUrl: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      '4 cups mixed greens',
      '1 cucumber, sliced',
      '1 cup cherry tomatoes, halved',
      '1 avocado, diced',
      '1/4 red onion, thinly sliced',
      '1/2 cup feta cheese, crumbled',
      '1/4 cup olive oil',
      '2 tbsp lemon juice',
      '1 tsp Dijon mustard',
      '1 clove garlic, minced',
      'Salt and pepper to taste'
    ],
    instructions: [
      'In a large bowl, combine mixed greens, cucumber, tomatoes, avocado, red onion, and feta cheese.',
      'In a small bowl, whisk together olive oil, lemon juice, Dijon mustard, and garlic.',
      'Season dressing with salt and pepper to taste.',
      'Drizzle dressing over salad and toss gently to coat.',
      'Serve immediately as a side dish or add grilled chicken for a complete meal.'
    ],
    category: 'Salad',
    tags: ['Healthy', 'Vegetarian', 'Quick'],
    author: {
      id: '9',
      name: 'Ina Garten',
      email: 'ina@example.com',
      profileImage: 'https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    ratings: 4.6,
    reviews: [
      {
        id: '5',
        user: {
          id: '10',
          name: 'Robert Taylor',
          email: 'robert@example.com'
        },
        rating: 4,
        comment: 'So fresh and tasty! Perfect for summer dinners.',
        createdAt: '2024-09-13T17:55:00.000Z'
      }
    ],
    createdAt: '2024-09-09T10:40:00.000Z'
  }
];

export const categories = [
  'All',
  'Breakfast',
  'Lunch',
  'Dinner',
  'Dessert',
  'Appetizers',
  'Salad',
  'Soup',
  'Pasta',
  'Main Course',
  'Side Dish',
  'Baking',
  'Beverages'
];

export const popularTags = [
  'Vegetarian',
  'Vegan',
  'Gluten-Free',
  'Quick Meals',
  'Healthy',
  'Comfort Food',
  'Italian',
  'Mexican',
  'Asian',
  'Indian',
  'Baking',
  'Dessert'
];