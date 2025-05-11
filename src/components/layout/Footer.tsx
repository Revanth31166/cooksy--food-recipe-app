import React from 'react';
import { ChefHat, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand and description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <ChefHat className="mr-2 h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold text-gray-900">Cooksy</span>
            </div>
            <p className="text-gray-600">
              Discover delicious recipes from around the world, share your culinary creations, and connect with food lovers everywhere.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 transition hover:text-orange-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 transition hover:text-orange-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 transition hover:text-orange-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 transition hover:text-orange-500">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Explore</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/recipes" className="text-gray-600 transition hover:text-orange-500">Recipes</Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-600 transition hover:text-orange-500">Categories</Link>
              </li>
              <li>
                <Link to="/popular" className="text-gray-600 transition hover:text-orange-500">Popular</Link>
              </li>
              <li>
                <Link to="/latest" className="text-gray-600 transition hover:text-orange-500">Latest</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 transition hover:text-orange-500">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 transition hover:text-orange-500">Contact</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 transition hover:text-orange-500">Careers</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 transition hover:text-orange-500">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/terms" className="text-gray-600 transition hover:text-orange-500">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 transition hover:text-orange-500">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-600 transition hover:text-orange-500">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Cooksy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;