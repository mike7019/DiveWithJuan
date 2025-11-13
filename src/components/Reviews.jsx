import React, { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Reviews.css';

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: 'Emma Holmes',
      text: 'Juan took me and my family on a snorkelling excursion. You have to be 10 years old to dive and we have a six year old so we went snorkelling. We had one of the best experiences as a family. It was our first time doing this with our daughter and it turned out to be one of the most magical experiences. One my daughter still talks about. Juan was kind and patient with us but especially with my daughter. He made sure we all felt safe and comfortable.',
      rating: 5
    },
    {
      name: 'Sarah S',
      text: 'Juan is the best and most fun diving instructor. I have experienced many diving instructors and Juan has this fantastic way of making you feel safe, comfortable, supported while having so much fun and spotting the best marine life. Every dive with Juan is a new experience and I look forward to many more dives with Juan.',
      rating: 5
    },
    {
      name: 'Dyana Carlton',
      text: 'My husband and I have been diving with Juan since he started in Cozumel. If you want to be pampered pick Juan! Not only is he an exceptional Divemaster but he is a patient instructor. Even after our course was over he continued to work with us on the little things that you don\'t think about. Little changes make a big difference. After each dive he had our favorite food and drinks ready for us.',
      rating: 5
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="reviews section" id="reviews">
      <div className="container">
        <div className="reviews-header">
          <h2 className="section-title">What divers are saying</h2>
          <div className="rating-display">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="rating-text">5.00 ★ (26)</span>
          </div>
        </div>

        <div className="reviews-carousel">
          <button className="carousel-btn prev" onClick={prevReview}>
            <FaChevronLeft />
          </button>

          <div className="review-card">
            <div className="stars">
              {[...Array(reviews[currentReview].rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="review-text">{reviews[currentReview].text}</p>
            <p className="reviewer-name">{reviews[currentReview].name}</p>
            <p className="reviewer-source">juandiving</p>
          </div>

          <button className="carousel-btn next" onClick={nextReview}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
