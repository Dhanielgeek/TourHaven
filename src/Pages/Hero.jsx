import React, { useState, useEffect } from 'react';
import './Page.css';
import Search from './Search';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    {
      title: 'Find the Best Hotels Within Lagos',
      subTitle: 'With Affordable price and best Suites',
    },
    {
      title: 'Discover Amazing Destinations',
      subTitle: 'Explore new places and create unforgettable memories',
    },
    {
      title: 'Book the Perfect Hotel for Your Stay',
      subTitle: 'Enjoy Luxury redefined at the most affordable rates.',
    },
    {
      title: 'Discover the Best Deals on Hotels',
      subTitle: 'With Exclusive Discounts and Offers',
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="HeroBody">
      <div className="HeroWrapper">
        <div className="HeroContainer">
          <div className="HeroTitle">
            <h1>{texts[textIndex].title}</h1>
          </div>
          <div className="HeroSubTitle">
            <h3>{texts[textIndex].subTitle}</h3>

          </div>
        </div>
        <Search/>
      </div>
    </div>
  );
};

export default Hero;
