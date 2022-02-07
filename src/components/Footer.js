import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from './Button';
import './Footer.css'

function Footer() {
  return (
  <div className='footer-container'>
    <section className='footer-subscription'>
      <p className='footer-subscription-heading'>
        Join the newsletter to recieve our best deals
      </p>
      <p className='footer-subscription-text'>
        You can unsubscribe anytime you want
      </p>
      <div>
        <form>
          <input className='footer-input' type="email" 
          name="email" 
          placeholder='Your email' />
          <Button buttonStyle="btn--outline">Subscribe</Button>
        </form>
      </div>
    </section>
    <div className='footer-links'>
      <div className='footer-link-wrapper'>
        <div className='footer-link-items'>
          <h2>About Us</h2>
          <Link to='/sign-up'>How it works</Link>
          <Link to='/'>Testimonials</Link>
          <Link to='/'>Careers</Link>
          <Link to='/'>Investors</Link>
          <Link to='/'>Terms of Service</Link>
        </div>
        <div class='footer-link-items'>
          <h2>Contact Us</h2>
          <Link to='/'>Contact</Link>
          <Link to='/'>Support</Link>
          <Link to='/'>Destinations</Link>
          <Link to='/'>Sponsorships</Link>
        </div>
        <div class='footer-link-items'>
          <h2>Videos</h2>
          <Link to='/'>Submit Video</Link>
          <Link to='/'>Ambassadors</Link>
          <Link to='/'>Agency</Link>
          <Link to='/'>Influencer</Link>
        </div>
        <div class='footer-link-items'>
          <h2>Social Media</h2>
          <Link to='/'>Instagram</Link>
          <Link to='/'>Facebook</Link>
          <Link to='/'>Youtube</Link>
          <Link to='/'>Twitter</Link>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              HGZ
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>HGZ © 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  </div>
  );
}

export default Footer;
