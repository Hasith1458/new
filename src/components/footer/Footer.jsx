import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
          Explore your dream home with our user-friendly real estate listing website. Browse a diverse range of properties,
          from cozy apartments to spacious homes. Enjoy detailed listings with high-quality photos, 
          virtual tours, and comprehensive property information. Find your perfect home effortlessly with our powerful search filters
          and stay informed about the latest market trends. Your next home is just a click away!
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: 91+ 8309328775</span>
          <span>Email: vamsichappa2004@gmail.com</span>
          <span>Instagram: realestate_45</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: Asia</span>
          <span>Country: India</span>
          <span>Current Location: India</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer