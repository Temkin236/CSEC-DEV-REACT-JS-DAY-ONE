import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Card from '../components/Card';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
        <Card 
          title="Card Title 1" 
          content="This is the content of card 1." 
        />
        <Card 
          title="Card Title 2" 
          content="This is the content of card 2." 
        />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
