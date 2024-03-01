import React from 'react';
import CardImage1 from '../assets/img1.jpg';
import CardImage2 from '../assets/img2.jpg';
import CardImage3 from '../assets/img3.jpg';

const Recipes = () => {
  return (
    <div id='recipies' className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:ml-0 md:ml-36">
        {/* Card 1 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md relative w-full sm:w-64">
          <h1 className="text-lg font-thin absolute top-4 right-4">First Card</h1>
          <img src={CardImage1} alt="Card 1" className="w-full h-64 object-cover" />
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md relative w-full sm:w-64">
          <img src={CardImage2} alt="Card 2" className="w-full h-64 object-cover" />
          <h1 className="absolute bottom-4 left-4 text-lg font-thin">Second Card</h1>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md relative w-full sm:w-64">
          <img src={CardImage3} alt="Card 3" className="w-full h-64 object-cover" />
          <h1 className="absolute top-0 left-0 m-4 text-lg font-thin">Third Card</h1>
        </div>
      </div>
    </div>
  );
}

export default Recipes;
