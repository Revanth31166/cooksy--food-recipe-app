import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import FeaturedCategories from '../components/home/FeaturedCategories';
import TopRecipes from '../components/home/TopRecipes';
import NewsletterSection from '../components/home/NewsletterSection';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedCategories />
      <TopRecipes />
      <NewsletterSection />
    </Layout>
  );
};

export default HomePage;