import React from 'react'
import { useSearchParams } from 'react-router-dom';
import './Home.css';

const Home = () => {

  const [SearchParams] = useSearchParams();

  const to = SearchParams.get('to');
  const from = SearchParams.get('from');

  return (
    <div>
      
      <div className='greeting'>
      <h1>Dear {to} 💖💖💖</h1>
        <p>फुलांचा सुगंध कोणी चोरू शकत नाही,

          सूर्याची किरणे कोणी लपवू शकत नाही,

          तुम्ही आमच्यापासून कितीही दूर असलात तरी,

          दिपावली सारख्या मंगल प्रसंगी

          तुम्हाला आम्ही विसरू शकत नाही.

          शुभ दिपावली!</p>
        <p>
          "May the divine light of Diwali bring endless joy and prosperity to our relationship. Wishing you a very Happy Diwali, my dearest."</p>
          <span className='sender'>Your {from} 💖💖💖</span>
      </div>
      
    </div>
  )
}

export default Home
