import React, { useState } from 'react';
import './FAQs.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqsData = [
  {
    question: "What is this website about?",
    answer: "This site is a React-based e-commerce platform with product details, category filtering, and stylish UI.",
  },
  {
    question: "How do I purchase a product?",
    answer: "Click on any product, read the details, and choose 'Buy Now' or add it to the cart.",
  },
  {
    question: "Can I see more products of the same category?",
    answer: "Yes, click on 'View More Products' under any category section.",
  },
  {
    question: "Is this site mobile responsive?",
    answer: "Absolutely! It's designed with responsiveness and animations in mind.",
  },
  {
    question: "How do I contact support?",
    answer: "Use the Contact page in the navigation bar to reach us via email or form.",
  },
  {
    question: "What technologies are used?",
    answer: "This app uses React, Express, Node.js, AOS, and FakeStoreAPI.",
  },
  {
    question: "Are the products real?",
    answer: "The products are fetched from FakeStoreAPI for demo purposes.",
  },
  {
    question: "Can I suggest a new feature?",
    answer: "Yes, contact us with your idea via the Contact form.",
  },
  {
    question: "Is this open-source?",
    answer: "Yes! You can find the code on our GitHub repository.",
  },
  {
    question: "What if a page doesn’t load?",
    answer: "Try refreshing or check your internet connection. You can also contact us.",
  },
  {
    question: "How do I go back to the homepage?",
    answer: "Click 'Home' in the navbar or the logo at the top-left.",
  },
  {
    question: "How can I see product details?",
    answer: "Click on any product to go to its dedicated details page.",
  },
  {
    question: "Are there similar products shown?",
    answer: "Yes, product detail pages show similar items from the same category.",
  },
  {
    question: "Is dark mode supported?",
    answer: "Currently no, but we’re working on a dark mode toggle soon.",
  },
  {
    question: "Can I use this template for my own site?",
    answer: "Yes! Just credit the developer or fork the GitHub repo.",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-heading">Frequently Asked Questions</h1>
      {faqsData.map((faq, index) => (
        <div className="faq-item" key={index}>
          <div className="faq-question" onClick={() => toggle(index)}>
            <span>{faq.question}</span>
            <span className="faq-arrow">
              {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faqs;
