'use strict';

import React from 'react';

const links = [
  {
    url: 'http://twitter.com/razcat',
    alt: 'Twitter',
    className: 'i-twitter',
  },
  {
    url: 'http://razcat.tumblr.com/',
    alt: 'tumblr.',
    className: 'i-tumblr',
  },
  {
    url: 'http://www.facebook.com/catrazcat',
    alt: 'facebook',
    className: 'i-facebook',
  },
  {
    url: 'http://catrazcat.deviantart.com/',
    alt: 'DeviantArt',
    className: 'i-deviant-art',
  },
  {
    url: 'http://www.instagram.com/razcat/',
    alt: 'instagram',
    className: 'i-instagram',
  },
  {
    url: 'http://www.redbubble.com/people/razcat',
    alt: 'Redbubble',
    className: 'i-redbubble',
  },
  {
    url: 'https://www.etsy.com/shop/Razcat',
    alt: 'Etsy',
    className: 'i-etsy',
  },
];

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className="header">
      <img className="header__cat" src="http://www.razcat.com/Razcat.net%20_%20About_files/aboutPIC.jpg" alt="My face." text="My face."/>
      <ul className="header__links">
        {
          links.map((link, n) => <li className="header__link">
            <a href={link.url} title={link.alt}>
              <i className={`icon ${link.className}`} />
            </a>
          </li>)
          
        }
      </ul>
      <div className="header__text">
        <h1>Cathy Razim</h1>
		<p>Hi -- My name is Cat and I am a New Media Designer and Illustrator currently living on Long Island NY.</p>
		<p>A native of Long Island, I grew up amidst diversity and the best NYC has to offer. Art has always been a passion of mine and I developed my skills throughout high school, taking college courses and spending my free time in the basement studios of my school. I entered the Rochester Institute of Technology as an Illustration major, graduated with a BFA in New Media Design, and continued towards an MFA in Fine Art Painting and Medical Illustration. During school I worked at the Print and Postal HUB, an on-campus print shop catering to faculty, students and local clientele. Between classes and work I became fluent in Adobe and other prepress software, as well as formating for both print and web media. </p>
		<p>When not working, I'm usually in the kitchen where I exercise my culinary talents. Other hobbies include photography and working on my comics. I watch hockey, listen to music, and have a passion for all things sci-fi and fantasy. I'm a geek and proud of it! </p>
		<p class="redirect"><em>Looking for Rose and the World of Centernia? Visit <a href="http://centernia.com/">http://centernia.com/</a></em></p>
      </div>
      </div>
    );
  }
}

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
