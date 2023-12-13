import React, { useState } from 'react';

export interface Card {
  title: string;
  // Add other properties as needed
}

interface SliderProps {
  cards: Card[];
  cardsPerPage: number;
}

const Slider: React.FC<SliderProps> = ({ cards, cardsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const visibleCards = cards.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="relative">
      <div className="flex space-x-4 overflow-x-auto">
        {visibleCards.map((card, index) => (
          <div key={index} className="flex-shrink-0 w-64 bg-gray-200 p-4 rounded-md">
            <h3 className="text-lg font-bold">{card.title}</h3>
            {/* Add other card content */}
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 right-4 flex items-center space-x-2">
        <button
          onClick={handlePrevPage}
          className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none"
        >
          Prev
        </button>
        <span>{`${currentPage}/${totalPages}`}</span>
        <button
          onClick={handleNextPage}
          className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;
