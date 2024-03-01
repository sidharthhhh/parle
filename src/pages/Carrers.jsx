import React from 'react';

const Careers = () => {
  return (
    <div id='carrers' className="bg-gray-100 text-gray-700">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold text-center mb-8">CAREERS</h1>
        </div>
        <div className="bg-gray-100 rounded-lg flex flex-col items-center p-4 ">
          <h2 className="text-xl font-bold mb-2  text-left md:mr-96">Parle's work culture values:</h2>
          <ul className="list-none text-left md:ml-24" style={{ lineHeight: '2.5' }}>
            <li><span className="font-semibold">Trust & Respect:</span> Being dependable & treating everyone with fairness & dignity</li>
            <li><span className="font-semibold">Responsibility & Responsiveness:</span> Taking proactive charge and being accountable for self & others</li>
            <li><span className="font-semibold">Integrity:</span> Being morally right & ethical in all interactions</li>
            <li><span className="font-semibold">Innovation:</span> Finding new creative ideas and making them feasible & effective</li>
            <li><span className="font-semibold">Teamwork:</span> Commitment to common goals & collaboration based on open & honest communication</li>
            <li><span className="font-semibold">Achievement and Focus:</span> Working smart with perseverance & being goal-driven</li>
            <li><span className="font-semibold">Positive and Passionate:</span> Engaging with optimism & enthusiasm & inspiring an unshakeable commitment</li>
          </ul>
        </div>

        <div className="flex flex-col items-center mt-8 md:mr-60">
          <h2 className="text-xl font-bold mb-4 text-left">Soar with Us, Give wings to your aspirations</h2>
          <div className="flex flex-col items-center md:ml-48 text-left">
            <p className="w-full md:w-3/5 text-lg">We bring you the opportunity to work with us and be part of creating a history. An opportunity to showcase your potential, develop your skills, and grow multifold.</p>
            <p className="w-full md:w-3/5 text-lg">Career with Parle is fueled with passion and purpose. It’s a platform where you have the opportunity to be more than your mere job title.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Careers;
