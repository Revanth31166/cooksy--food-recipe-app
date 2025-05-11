import React, { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would make an API call to subscribe the user
    setIsSubmitted(true);
  };
  
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-orange-500 shadow-xl">
          <div className="grid items-center md:grid-cols-2">
            {/* Image half */}
            <div className="hidden h-full md:block">
              <img 
                src="https://images.pexels.com/photos/5965401/pexels-photo-5965401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Cooking newsletter"
                className="h-full w-full object-cover"
              />
            </div>
            
            {/* Content half */}
            <div className="px-6 py-12 sm:px-12">
              <div className="max-w-lg">
                <h2 className="text-3xl font-bold text-white">Get Weekly Recipe Inspiration</h2>
                <p className="mt-4 text-lg text-white/90">
                  Subscribe to our newsletter and receive delicious recipes, cooking tips, and special offers right in your inbox.
                </p>
                
                {isSubmitted ? (
                  <div className="mt-8 rounded-lg bg-white/10 p-4 text-white backdrop-blur-sm">
                    <p className="font-medium">Thank you for subscribing!</p>
                    <p className="mt-1">Check your inbox for a confirmation email.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8">
                    <div className="flex flex-col sm:flex-row">
                      <Input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mb-2 border-white sm:mb-0 sm:mr-2"
                      />
                      <Button 
                        type="submit"
                        variant="secondary"
                        className="whitespace-nowrap"
                      >
                        Subscribe
                      </Button>
                    </div>
                    <p className="mt-2 text-sm text-white/80">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;