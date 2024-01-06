import React, { useState } from 'react';
import styled from 'styled-components';

const faqs = [
    {
      question: 'What are the benefits of going to a gym?',
      answer: 'Going to a gym offers numerous benefits including improved physical fitness '
     
         
    },
    {
      question: 'How do I choose the right gym for me?',
      answer: 'Consider factors such as location, cost, facilities and equipment available.'
    },
    {
        question: 'What are the benefits of going to a gym?',
        answer: 'Going to a gym offers numerous benefits including improved physical fitness '
       
           
      },
      {
        question: 'How do I choose the right gym for me?',
        answer: 'Consider factors such as location, cost, facilities and equipment available.'
      },
    // Add more FAQs here...
  ];

const FAQContainer = styled.div`
.bodyy {
            display: flex;
            flex-direction: column;
            justify-content:center;
            align-items:center;
            height:100%;
            

}

 .faq-item {
        background: var(--color-light);
        padding: 2rem 2rem;
        
        gap: 1rem;
        border: 1px solid #ddd;
        cursor: pointer;
  }

  .faq-question {
        font-size: 1.2rem;
        font-weight: 500;
        width:450px;
  }

  .faq-answer {
    font-size:1.4rem;
    margin-top: 0.2rem;
        display: none;
  }


  .faq-question.active {
        border-color: var(--color-primary);
        color: var(--color-primary);
        z-index: 2;
  }

  .faq-question.active + .faq-answer {
    display: block;
  }
`;

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div >
    <FAQContainer className="container">
    <div className= "bodyy">

    <h2 className="title">FAQS</h2>

      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <div
            className={`faq-question ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleToggle(index)}
          >
            {faq.question}
          </div>
          <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
            {faq.answer}
          </div>
        </div>
      ))}
      </div>
    </FAQContainer>
    </div>
  );
};

export default FAQ;
