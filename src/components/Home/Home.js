import React from 'react';
import { auth } from "../../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Footer from '../Footer/Footer.jsx';

import Slider from './Slider';
import ChatBox from '../Chat/Chatbox.js';
import Welcome from '../Chat/Welcome.js';



const HomePage = () => {
  const [user] = useAuthState(auth);
  const data = {
    menu: {
      header: 'All Categories',
      children: [
        {
          name: 'About',
          id: 1,
          link: '/about',
          children: [
            { name: 'Mission', id: 11, link: null, children: [] },
            { name: 'Objectives', id: 12, link: null, children: [] },
            {
              name: 'Goals',
              id: 13,
              link: '/about/goals',
              children: [
                { name: 'Charity', id: 131, link: null, children: [] },
                { name: 'Clean Environment Plan', id: 132, link: null, children: [] },
              ],
            },
          ],
        },
        { name: 'Services', id: 2, link: '/services', children: [] },
        { name: 'People', id: 3, link: '/people', children: [] },
        { name: 'Careers', id: 4, link: '/careers', children: [] },
        { name: 'Contact', id: 5, link: null, children: [] },
      ],
    },
  };
  const slides = [
    { image: 'https://radioital.com/app/img/slide_1.791b360.jpg', alt: 'Image 1' },
    { image: 'https://radioital.com/app/img/slide_2.4baea67.jpg', alt: 'Image 2' },
    { image: 'https://radioital.com/app/img/slide_3.946801c.jpg', alt: 'Image 3' }
  ];

  return (
    <div className="home-page">
        <div className="home-content">
        <div className="home-chat">
          <Slider slides={slides} autoSlideDelay={3000} />
          {!user ? <Welcome /> : <ChatBox />}
          <Footer />
        </div>
        </div>
      </div>
  );
};

export default HomePage;
