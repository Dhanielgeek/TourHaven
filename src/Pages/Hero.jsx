import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Page.css'

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0)
  const texts = [
    {
      title: "Find the Best Hotels Within Lagos",
      subTitle: "With Affordable price and best Suites"
    },
    {
      title: "Discover Amazing Destinations",
      subTitle: "Explore new places and create unforgettable memories"
    },
    {
        title : "Book the Perfect Hotel for Your Stay",
        subTitle : "Enjoy Luxury redefined at the most affordable rates."
    },
    {
        title : "Discover the Best Deals on Hotels",
        subTitle : "With Exclusive Discounts and Offers"
    }
  ]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex(prevIndex => (prevIndex + 1) % texts.length)
    }, 2000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="HeroBody">
      <div className="HeroWrapper">
        <div className="HeroContainer">
            <div className="HeroTitle">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {texts[textIndex].title}
              </motion.h1>
            </div>
            <div className="HeroSubTitle">
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {texts[textIndex].subTitle}
              </motion.h3>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
