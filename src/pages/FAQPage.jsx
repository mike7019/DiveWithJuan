import React, { useState } from 'react';
import { useLanguage } from '../context/useLanguage';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import './FAQPage.css';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { language } = useLanguage();

  const faqs = [
    {
      question: 'Do I need to be certified to dive?',
      answer: 'Not necessarily. First-timers can join a Discover Scuba Diving experience with an instructor.'
    },
    {
      question: 'How long does a 2-tank dive take?',
      answer: 'Most trips take around 4–5 hours.'
    },
    {
      question: 'How do you choose the dive sites?',
      answer: 'We consider ocean conditions, experience level, and what the group wants to explore.'
    },
    {
      question: 'What are the best dive sites in the area?',
      answer: 'Palancar (Gardens, Caves, Horseshoe), Santa Rosa Wall, Colombia, and Cedral — all famous for visibility, drift diving, and vibrant reefs.'
    },
    {
      question: 'Do you offer Nitrox?',
      answer: 'Yes. Nitrox is available for certified divers upon request (extra fee may apply).'
    },
    {
      question: 'What marine life can I expect to see?',
      answer: 'Turtles, eagle rays, nurse sharks, moray eels, barracuda, giant sponges, and loads of reef fish.'
    },
    {
      question: 'What\'s the water temperature like?',
      answer: 'Warm year-round: about 24–26°C (76–78°F) in winter and 28–30°C (82–86°F) in summer.'
    },
    {
      question: 'What should I bring for the trip?',
      answer: 'Swimsuit, towel, reef-safe sunscreen, and your certification card if you\'re certified.'
    },
    {
      question: 'Do you offer hotel pick-ups?',
      answer: 'No, we don\'t offer pick-ups. We meet directly at the marina at the scheduled time.'
    },
    {
      question: 'Where do the boats depart from?',
      answer: 'We depart from the marina, and you\'ll receive exact meeting instructions after booking.'
    },
    {
      question: 'Can I join if I haven\'t dived in a long time?',
      answer: 'Yes. A refresher or a slow, easy first dive can help you feel comfortable again.'
    },
    {
      question: 'Are private dives available?',
      answer: 'Yes. Private guides and private boats can be arranged on request.'
    },
    {
      question: 'What if the weather is bad?',
      answer: 'If the port closes or conditions are unsafe, the trip may be rescheduled or refunded.'
    },
    {
      question: 'What\'s the typical group size?',
      answer: 'We keep small groups to ensure a relaxed, personalized experience.'
    },
    {
      question: 'Does the Marine Park have rules?',
      answer: 'Yes. The Cozumel Marine Park has strict regulations: no sunscreen, no gloves, no sticks, and no touching the coral or marine life at any time.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navigation />
      <div className="faq-page">
        <div className="faq-hero">
          <div className="faq-hero-content">
            <h1>Frequently Asked Questions</h1>
            <p>Everything you need to know about diving in Cozumel</p>
          </div>
        </div>

        <div className="faq-container">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${openIndex === index ? 'open' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default FAQPage;
