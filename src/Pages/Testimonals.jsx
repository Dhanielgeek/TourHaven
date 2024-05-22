import React from 'react';
import './Page.css';
import Elisesae from '../assets/Ellipse 1.svg';
import Elisase from '../assets/Ellipse 1 (2).svg';
import Guy from '../assets/guyyy.svg'

const Testimonals = () => {
  const TestimonialsData = [
    {
      Name: 'Micheal Peters',
      Image: Guy,
      TestiMo:
        '"TourHaven made my vacation planning a breeze! The user-friendly interface helped me find the perfect hotel within minutes. Highly recommended!"',
    },
    {
      Name: 'Justina Akpan',
      Image: Elisase,
      TestiMo:
        '"Ive been using TourHaven for all my business trips, and it never disappoints. The wide selection of hotels and affordable prices make it my go-to platform. Thanks, TourHaven!"',
    },
    {
      Name: 'Deborah James',
      Image: Elisesae,
      TestiMo:
        '"TourHaven made my vacation planning a breeze! The user-friendly interface helped me find the perfect hotel within minutes. Highly recommended!"',
    },
  ];

  return (
    <div className="TestimonalsBody">
      <div className="TestimonalsHeader">
        <h1>WHAT OUR CUSTOMERS SAY</h1>
        <h3>TESTIMONIALS</h3>
      </div>
      <div className="TestimonialsContiner">
        {TestimonialsData.map((testimonial, index) => (
          <div className="TestimonialsCard" key={index}>
            <div className="TestimonialsText">
              <span>{testimonial.TestiMo}</span>
            </div>
            <div className="TestimonalsImage">
              <div className="Testimonalimgholder">
                <img src={testimonial.Image} alt="" />
              </div>
            </div>
            <div className="TestimonalsName">
              <h4>{testimonial.Name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonals;
