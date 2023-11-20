import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import './Home.css';
import DiwaliLamp from './diwali-lamp.png'

const Home = () => {

  const [SearchParams] = useSearchParams();

  const [to, setTo] = useState(SearchParams.get('to'));
  const [from, setFrom] = useState(SearchParams.get('from'));
  const [themeNumber, setThemeNumber] = useState(SearchParams.get('t'));


  return (
    <div className='greet-container'>

      <div className={`greeting ${`theme-${themeNumber}`}`}>
        <div className='greet-head'>
          <img src={DiwaliLamp} />
          <span>Happy Diwali</span>
          <img src={DiwaliLamp} />
        </div>
        <h1 className='heading'>Dear {to} 💖💖💖</h1>
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
      <p className=' message'> Do You Want To Costimized Your Own Diwali Greetings?Costmise here👇</p>
      <p className='url'>
        {import.meta.env.VITE_BASE_URL}?to={to}&from={from}&t={themeNumber}
      </p>
      <div className='input-container'>
        <input type='text'
          placeholder='To'
          value={to}
          onChange={(e) => {
            setTo(e.target.value)
          }}
          className='input' />

        <input type='text'
          placeholder='From'
          value={from}
          onChange={(e) => {
            setFrom(e.target.value)
          }}
          className='input' />

        <select value={themeNumber} onChange={(e) => {
          setThemeNumber(e.target.value)
        }}
          className='input'>
          <option value="1">Theme 1</option>
          <option value="2">Theme 2</option>
          <option value="3">Theme 3</option>
          <option value="4">Theme 4</option>
          <option value="5">Theme 5</option>
        </select>

        <select value={themeNumber} onChange={(e) => {
          setThemeNumber(e.target.value)
        }}
          className='input'>
          <option value="1">Theme 1</option>
          <option value="2">Theme 2</option>
          <option value="3">Theme 3</option>
          <option value="4">Theme 4</option>
          <option value="5">Theme 5</option>
        </select>
      </div>

    </div>

  )
}

export default Home
